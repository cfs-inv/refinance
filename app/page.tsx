// app/page.tsx
'use client';

import { useState, Suspense } from 'react';
import RefinanceForm from './components/RefinanceForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'lower_payment' | 'extra_cash'>('lower_payment');

  const scrollToForm = (goal: 'lower_payment' | 'extra_cash') => {
    setActiveTab(goal);
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <Navbar></Navbar>
      
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-8 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 rounded-full">
          Refinancing Options
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
          Unlock Better Terms on Your Existing Loan. <br className="hidden md:inline" />
          <span className="text-blue-600">We Have Options for You.</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Whether you want to breathe room into your monthly budget or access capital from your current loan, we’re here to help you refinance with total transparency.
        </p>
      </section>

      {/* 2-COLUMN COMPARISON */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Lower Payments */}
          <div className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl mb-6 font-bold text-xl">
                ↓ %
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Looking for Lower Monthly Payments?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Reduce your current obligation and keep more cash in your pocket every month by restructuring your remaining balance.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                <span className="text-xs uppercase font-bold text-emerald-800 tracking-wide block mb-1">
                  Estimated Savings Range
                </span>
                <p className="text-3xl font-extrabold text-emerald-700">
                  Up to 40% Lower*
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  *Based on customers refinancing at or beyond the 50% midpoint of their existing loan schedule.
                </p>
              </div>
            </div>

            <button
              onClick={() => scrollToForm('lower_payment')}
              className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition duration-200 shadow-md text-center cursor-pointer"
            >
              Explore Lower Payments →
            </button>
          </div>

          {/* Extra Cash */}
          <div className="p-8 md:p-12 flex flex-col justify-between bg-slate-50/50">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6 font-bold text-xl">
                $ +
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Need Extra Cash from Your Loan?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Leverage your good payment history to access an additional cash payout while refinancing your current balance into a single payment.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <span className="text-xs uppercase font-bold text-blue-800 tracking-wide block mb-1">
                  Potential Extra Capital
                </span>
                <p className="text-3xl font-extrabold text-blue-700">
                  $1,500 – $10,000+*
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  *Subject to current equity, payment history, and lender underwriting parameters.
                </p>
              </div>
            </div>

            <button
              onClick={() => scrollToForm('extra_cash')}
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200 shadow-md text-center cursor-pointer"
            >
              Explore Extra Cash →
            </button>
          </div>

        </div>
      </section>

      {/* FORMULARIO ENVUELTO EN SUSPENSE */}
      <section id="application-form" className="max-w-3xl mx-auto px-4 py-16">
        <Suspense fallback={<div className="text-center p-8 text-slate-500">Loading form...</div>}>
          <RefinanceForm initialGoal={activeTab} />
        </Suspense>
      </section>

    </main>

<Footer variant="cfs" />
    </>
  );
}