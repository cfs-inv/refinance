export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">About Us & Licensing</h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        We are committed to providing transparent, accessible refinancing options for existing loan holders. 
        Our network works strictly with licensed entities to ensure your financial transition is secure and compliant.
      </p>

      {/* TRUST BADGES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
          <div className="text-blue-600 font-bold text-lg mb-2">Better Business Bureau (BBB)</div>
          <p className="text-sm text-slate-600">
            Accredited Business maintaining an A+ Rating for customer satisfaction, clear resolution processes, and fair financial practices.
          </p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
          <div className="text-blue-600 font-bold text-lg mb-2">State & Federal Compliance</div>
          <p className="text-sm text-slate-600">
            NMLS / State Financial Regulatory Licenses active and verified across all operating jurisdictions.
          </p>
        </div>
      </div>
    </main>
  );
}