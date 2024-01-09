import React, { useState } from "react";
import { useForm } from "react-hook-form";

function PermissionPreferences() {
  const { register, handleSubmit, watch, formState } = useForm();

  const submitHandler = (data) => console.log(data);
  return (
    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:grid grid-cols-[200px,1fr]"
    style={{ gridTemplateColumns: "max(380px) 1fr" }}>
      <div className="mt-4 ml-4">
        <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200">
          Permission Preferences
        </h2>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Customize permissions for your Cahiers and Managers.
        </span>
      </div>

      <form onSubmit={handleSubmit(submitHandler)}>
        <label
          htmlFor="allowCashiersToOfferDiscounts"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="allowCashiersToOfferDiscounts"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("allowCashiersToOfferDiscounts")}
          />
          <span className="ml-2">Allow cashiers to offer discounts</span>
        </label>

        <label
          htmlFor="allowManagersToChangeEmailAddressWhileRequestingReports"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="allowManagersToChangeEmailAddressWhileRequestingReports"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register(
              "allowManagersToChangeEmailAddressWhileRequestingReports"
            )}
          />
          <span className="ml-2">
            Allow managers to change email address while requesting reports
          </span>
        </label>

        <label
          htmlFor="hideTheShiftSummaryLinkInLockScreen"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="hideTheShiftSummaryLinkInLockScreen"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("hideTheShiftSummaryLinkInLockScreen")}
          />
          <span className="ml-2">
            Hide the shift summary link in lock screen
          </span>
        </label>

        <label
          htmlFor="EnableAutomaticOrderTicket"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="EnableAutomaticOrderTicket"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("EnableAutomaticOrderTicket")}
          />
          <span className="ml-2">
            Enable automatic order ticket / KOT generation for incoming orders
          </span>
        </label>

        <label
          htmlFor="quickBilling"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="quickBilling"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("quickBilling")}
          />
          <span className="ml-2">Enable quick billing</span>
        </label>

        <label
          htmlFor="hideQunatityIncreaseDecreaseButton"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="hideQunatityIncreaseDecreaseButton"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("hideQunatityIncreaseDecreaseButton")}
          />
          <span className="ml-2">
            Hide quantity increase / decrease buttons
          </span>
        </label>

        <label
          htmlFor="hideAllTopCategories"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="hideAllTopCategories"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("hideAllTopCategories")}
          />
          <span className="ml-2">Hide All and Top categories </span>
        </label>

        <label
          htmlFor="enforceCustomerMobileNumber"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="enforceCustomerMobileNumber"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("enforceCustomerMobileNumber")}
          />
          <span className="ml-2">Enforce customer mobile number</span>
        </label>

        <label
          htmlFor="billingWhenShiftIsOpened"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="billingWhenShiftIsOpened"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("billingWhenShiftIsOpened")}
          />
          <span className="ml-2">Enable billing only when shift is opened</span>
        </label>

        <label
          htmlFor="waiterAppIncomingDinin"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="waiterAppIncomingDinin"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("waiterAppIncomingDinin")}
          />
          <span className="ml-2">
            Show incoming dine-in orders on waiter app
          </span>
        </label>

        <label
          htmlFor="fulfillingBookingReceipt"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="fulfillingBookingReceipt"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("fulfillingBookingReceipt")}
          />
          <span className="ml-2">Create receipt while fulfilling booking</span>
        </label>

        <button className="align-bottom inline-flex mt-6 items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PermissionPreferences;

