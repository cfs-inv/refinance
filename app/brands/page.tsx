export default function BrandsPage() {
  const brands = [
    { name: 'Alpha Auto Finance', NMLS: '140129', description: 'Direct auto loan refinancing specialist.' },
    { name: 'Capital Direct Lending', NMLS: '883920', description: 'Personal and installment loan consolidation.' },
    { name: 'Omni Credit Services', NMLS: '392104', description: 'Consumer refinancing and term restructuring.' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-4">Our Partner Brands & Lenders</h1>
      <p className="text-slate-600 mb-8">
        If you received an invitation or applied through one of our specialized brand portals, verify its listing below.
      </p>

      <div className="grid grid-cols-1 gap-4">
        {brands.map((b, i) => (
          <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-slate-900">{b.name}</h3>
              <p className="text-sm text-slate-500">{b.description}</p>
            </div>
            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1 rounded-md">
              NMLS #{b.NMLS}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}