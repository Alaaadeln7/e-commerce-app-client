import { useFormik } from "formik";
import * as yup from "yup";
import { useCheckCouponMutation } from "../store/api/discountApiSlice.js";
import toast from "react-hot-toast";

export default function useCoupon() {
  const [checkCoupon, { data: discount, isLoading: checkCouponLoading }] =
    useCheckCouponMutation();

  const formik = useFormik({
    initialValues: { coupon: "" },
    validationSchema: yup.object({
      coupon: yup.string().required("Coupon is required").trim(),
    }),
    onSubmit: async (values) => {
      await checkCoupon(values.coupon).unwrap();
      if (discount?.validtion === true) {
        toast.success("Coupon applied");
      }
      if (discount?.validtion === false) {
        toast.error("Coupon not found");
      }
    },
  });

  return { formik, checkCouponLoading, discount };
}
