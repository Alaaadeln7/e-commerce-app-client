import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { useCompleteInfoMutation } from "../../store/api/authApiSlice";
import MainButtonLoader from "../../components/MainButtonLoader";
export default function InputInfo() {
  const navigate = useNavigate();
  const [completeInfo, { isLoading ,isSuccess }] = useCompleteInfoMutation();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      city: "",
      area: "",
      street: "",
      phoneNumber: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Full Name is required").trim(),
      city: yup.string().required("Address is required").trim(),
      area: yup.string().required("Address is required").trim(),
      street: yup.string().required("Address is required").trim(),
      phoneNumber: yup
        .string()
        .required("Phone Number is required")
        .trim(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await completeInfo(values).unwrap();
      if(isSuccess){
        navigate("/makeOrder")
      }
    },
  });

  return (
    <div className=" mt-40 text-center container px-4">
      <header className="text-center mb-6 flex justify-center items-center gap-5">
        <button className="btn btn-primary " onClick={() => navigate(-1)}><MoveLeft size={20}/></button>
        <h1 className="text-3xl font-semibold">input your info</h1>
      </header>
      <section className="flex justify-center mx-5 max-w-[500px] flex-col ">
        <article className="w-full p-6 border  rounded-lg">
          <form
            method="POST"
            className="flex flex-col gap-6"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="fullName" className="label">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="input w-full input-bordered  mt-2"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                placeholder="type your full name"
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.fullName}
                </p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="city" className="label">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="input w-full input-bordered  mt-2"
                onChange={formik.handleChange}
                value={formik.values.city}
                placeholder="type your city"
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.city}
                </p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="area" className="label">
                Area
              </label>
              <input
                type="text"
                name="area"
                id="area"
                className="input w-full input-bordered  mt-2"
                onChange={formik.handleChange}
                value={formik.values.area}
                placeholder="type your area"
              />
              {formik.touched.area && formik.errors.area && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.area}
                </p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="street" className="label">
                Street
              </label>
              <input
                type="text"
                name="street"
                id="street"
                className="input w-full input-bordered  mt-2"
                onChange={formik.handleChange}
                value={formik.values.street}
                placeholder="type your street"
              />
              {formik.touched.street && formik.errors.street && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.street}
                </p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="phoneNumber" className="label">
                Phone Number
              </label>
              <input
                type="phone"
                name="phoneNumber"
                id="phoneNumber"
                className="input w-full input-bordered  mt-2"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                placeholder="Phone Number"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.phoneNumber}
                </p>
              )}
            </div>

            <button disabled={isLoading} type="submit" className="btn btn-primary w-full">
              {isLoading ? <MainButtonLoader/> : "Submit"}
            </button>
          </form>
        </article>
      </section>
    </div>
  );
}
