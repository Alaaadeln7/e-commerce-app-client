import { useEffect } from "react";
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
    onSubmit: async (values, { resetForm }) => {
      await checkCoupon(values.coupon).unwrap();
      resetForm();
    },
  });

  useEffect(() => {
    if (discount) toast.success(discount.message);
    if (formik.errors.coupon && formik.touched.coupon) {
      toast.error(formik.errors.coupon);
    }
  }, [discount]);

  return { formik, checkCouponLoading };
}
