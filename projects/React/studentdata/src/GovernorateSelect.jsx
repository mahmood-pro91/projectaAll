

export default function GovernorateSelect({value,handleChange}) {
  
  
  const governorates = [
    { id: 1, name: 'القاهرة', nameEn: 'Cairo' },
    { id: 2, name: 'الجيزة', nameEn: 'Giza' },
    { id: 3, name: 'الإسكندرية', nameEn: 'Alexandria' },
    { id: 4, name: 'الدقهلية', nameEn: 'Dakahlia' },
    { id: 5, name: 'البحر الأحمر', nameEn: 'Red Sea' },
    { id: 6, name: 'البحيرة', nameEn: 'Beheira' },
    { id: 7, name: 'الفيوم', nameEn: 'Fayoum' },
    { id: 8, name: 'الغربية', nameEn: 'Gharbia' },
    { id: 9, name: 'الإسماعيلية', nameEn: 'Ismailia' },
    { id: 10, name: 'المنوفية', nameEn: 'Menofia' },
    { id: 11, name: 'المنيا', nameEn: 'Minya' },
    { id: 12, name: 'القليوبية', nameEn: 'Qalyubia' },
    { id: 13, name: 'الوادي الجديد', nameEn: 'New Valley' },
    { id: 14, name: 'السويس', nameEn: 'Suez' },
    { id: 15, name: 'اسوان', nameEn: 'Aswan' },
    { id: 16, name: 'اسيوط', nameEn: 'Assiut' },
    { id: 17, name: 'بني سويف', nameEn: 'Beni Suef' },
    { id: 18, name: 'بورسعيد', nameEn: 'Port Said' },
    { id: 19, name: 'دمياط', nameEn: 'Damietta' },
    { id: 20, name: 'الشرقية', nameEn: 'Sharqia' },
    { id: 21, name: 'جنوب سيناء', nameEn: 'South Sinai' },
    { id: 22, name: 'كفر الشيخ', nameEn: 'Kafr El Sheikh' },
    { id: 23, name: 'مطروح', nameEn: 'Matrouh' },
    { id: 24, name: 'الأقصر', nameEn: 'Luxor' },
    { id: 25, name: 'قنا', nameEn: 'Qena' },
    { id: 26, name: 'شمال سيناء', nameEn: 'North Sinai' },
    { id: 27, name: 'سوهاج', nameEn: 'Sohag' }
  ];
  
  
  
  return (
    <div className="p-4 max-w-md mx-auto">
      <label htmlFor="governorate-select" className="block text-lg font-medium text-gray-700 mb-2 text-right">
        اختر المحافظة
      </label>
      
      <select
        id="governorate-select"
        value={value}
        onChange={handleChange}
        className="block w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
        dir="rtl"
      >
        <option value="" disabled>-- اختر محافظة --</option>
        {governorates.map((governorate) => (
          <option key={governorate.id} value={governorate.name}>
            {governorate.name}
          </option>
        ))}
      </select>
      
     
    </div>
  );
}