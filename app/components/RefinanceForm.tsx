// components/RefinanceForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface RefinanceFormProps {
  initialGoal: 'lower_payment' | 'extra_cash';
}

export default function RefinanceForm({ initialGoal }: RefinanceFormProps) {
  const [goal, setGoal] = useState<'lower_payment' | 'extra_cash'>(initialGoal);
  const searchParams = useSearchParams();

  // Opcional: Extraer UTMs de la URL automáticamente si existen
  const utmCampaign = searchParams.get('utm_campaign') || '';
  const utmSource = searchParams.get('utm_source') || 'refi-landing';

  useEffect(() => {
    setGoal(initialGoal);
  }, [initialGoal]);

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900">Check Your Refinance Options</h3>
        <p className="text-slate-500 text-sm mt-1">
          No obligation, no hard credit check required.
        </p>
      </div>

      {/* SELECCIÓN DE OBJETIVO PRINCIPAL */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          What is your primary refinancing goal?
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setGoal('lower_payment')}
            className={`py-3 px-4 rounded-xl font-medium border text-sm transition ${
              goal === 'lower_payment'
                ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600/20 font-bold'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            📉 Lower Payments
          </button>
          <button
            type="button"
            onClick={() => setGoal('extra_cash')}
            className={`py-3 px-4 rounded-xl font-medium border text-sm transition ${
              goal === 'extra_cash'
                ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600/20 font-bold'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            💵 Extra Cash
          </button>
        </div>
      </div>

      {/* FORMULARIO POST DIRECTO A ZOHO FORMS */}
      <form
        action="https://forms.zohopublic.com/aldobettoni/form/RefinanceAlt1/formperma/AYIGN1tvSiylb_PaDhBKZzCEpNSD0GRXFZTHP7PMRUE/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        className="space-y-4"
      >
        {/* NATIVE ZOHO TRACKING HIDDEN INPUTS */}
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        {/* CRM CUSTOM HIDDEN FIELDS */}
        {/* Main Source */}
        <input type="hidden" name="SingleLine7" value="Website" />

        {/* Prospect Type (Mapeado dinámicamente según la opción elegida) */}
        <input
          type="hidden"
          name="SingleLine1"
          value={goal === 'lower_payment' ? 'Lower Monthly Payment' : 'Extra Cash Payout'}
        />

        {/* Traffic Source */}
        <input type="hidden" name="SingleLine2" value={utmSource} />

        {/* Prospect Source */}
        <input type="hidden" name="SingleLine3" value="Internal Marketing" />

        {/* UTM Campaign */}
        <input type="hidden" name="SingleLine4" value={utmCampaign} />

        {/* INPUTS DE CONTACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">First Name</label>
            <input
              type="text"
              maxLength={255}
              name="Name_First"
              required
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-800"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Last Name</label>
            <input
              type="text"
              maxLength={255}
              name="Name_Last"
              required
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-800"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
          <input
            type="email"
            maxLength={255}
            name="Email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number</label>
          <input
            type="text"
            name="PhoneNumber_countrycode"
            id="international_PhoneNumber_countrycode"
            maxLength={20}
            required
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-800"
          />
        </div>

        {/* TERMS AND CONDITIONS */}
        <div className="pt-2">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 text-justify mb-3 leading-relaxed">
            By clicking “Submit”, you expressly consent to be contacted by CFS Investments and its affiliate companies, which may include receiving email, auto-dialed calls and messages, pre-recorded message calls and SMS messages (including text messages) at any telephone numbers that you have provided. Standard data and text message rates may apply.
          </div>
          <label className="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              name="TermsConditions"
              required
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span>I accept the Terms and Conditions.</span>
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition duration-200 mt-4 cursor-pointer"
        >
          Submit & Check My Options
        </button>

        <p className="text-[11px] text-slate-400 text-center mt-2">
          🔒 Encrypted 256-bit connection. Your privacy is protected.
        </p>
      </form>
    </div>
  );
}