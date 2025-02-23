import { useFormik } from "formik";
import { useAddProductMutation } from "../../store/api/productApiSlice";
import { validationAddProduct } from "../../utils/validation";
import MainButtonLoader from "../../components/MainButtonLoader";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export default function AddProduct() {
  const [sizes, setSizes] = useState([]);
  const [addProduct, { isLoading: addProductLoading }] =
    useAddProductMutation();
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      thumbnail: null,
      freeReturn: false,
      freeShipping: false,
      discount: 0,
      sizes: [],
    },
    validationSchema: validationAddProduct,
    onSubmit: async (values, { resetForm }) => {
      const result = await addProduct({ ...values, sizes });
      if (result?.data) {
        resetForm();
        setThumbnailPreview(null);
        fileInputRef.current && (fileInputRef.current.value = "");
        toast.success("Product added successfully!");
      }
    },
  });

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
        formik.setFieldValue("thumbnail", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please select a valid image file.");
    }
  };

  const removeImage = () => {
    setThumbnailPreview(null);
    formik.setFieldValue("thumbnail", null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const addSize = () => {
    setSizes((prevSizes) => [...prevSizes, { value: "", unit: "piece" }]);
  };

  const updateSize = (index, field, value) => {
    const newSizes = [...sizes];
    newSizes[index][field] = value;
    setSizes(newSizes);
  };

  const removeSize = (index) => {
    setSizes(sizes.filter((_, i) => i !== index));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-20 p-6 mx-auto max-w-4xl border rounded-lg shadow-lg bg-white"
      encType="multipart/form-data"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
      <div className="space-y-6">
        {/* Title and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.title && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.title}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              className="select w-full max-w-xs input-bordered mt-2"
            >
              <option value="face">face</option>
              <option value="body">body</option>
            </select>
            {formik.errors.category && (
              <p className="text-sm text-red-500 mt-1">
                {formik.errors.category}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Product Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          {formik.errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>

        {/* Price, Stock, and Discount */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.price && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.price}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Product Stock"
              value={formik.values.stock}
              onChange={formik.handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.stock && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.stock}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discount (%)
            </label>
            <input
              type="number"
              name="discount"
              placeholder="Discount"
              value={formik.values.discount}
              onChange={formik.handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Free Return and Free Shipping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="freeReturn"
              checked={formik.values.freeReturn}
              onChange={formik.handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">Free Return</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="freeShipping"
              checked={formik.values.freeShipping}
              onChange={formik.handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">Free Shipping</label>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sizes
          </label>
          {sizes.map((size, index) => (
            <div key={index} className="flex items-center gap-2 mt-2">
              <input
                type="number"
                placeholder="Size Value"
                value={size.value}
                onChange={(e) => updateSize(index, "value", e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={size.unit}
                onChange={(e) => updateSize(index, "unit", e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="m">Meter (m)</option>
                <option value="cm">Centimeter (cm)</option>
                <option value="l">Liter (l)</option>
                <option value="ml">Milliliter (ml)</option>
                <option value="piece">Piece</option>
              </select>
              <button
                type="button"
                onClick={() => removeSize(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSize}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Size
          </button>
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Thumbnail
          </label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleThumbnailChange}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-2 btn btn-primary"
          >
            Upload Thumbnail
          </button>

          {thumbnailPreview && (
            <div className="mt-4 flex items-center gap-2">
              <div className="relative">
                <img
                  src={thumbnailPreview}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                />
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
                  type="button"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={addProductLoading}
          className="w-full btn btn-primary"
        >
          {addProductLoading ? <MainButtonLoader /> : "Add Product"}
        </button>
      </div>
    </form>
  );
}
