import customer1 from "./assets/customer-logo/customer1.webp";
import customer2 from "./assets/customer-logo/customer2.webp";
import customer3 from "./assets/customer-logo/customer3.webp";
import customer4 from "./assets/customer-logo/customer4.webp";
import customer5 from "./assets/customer-logo/customer5.webp";
import customer6 from "./assets/customer-logo/customer6.webp";
import ser1 from "./assets/services/ser1.webp";
import ser2 from "./assets/services/ser2.webp";
import por1 from "./assets/portfolio/1.webp";
import logo1 from "./assets/portfolio/logo1.png";

export const CustomerData = [
  { id: "1", img: customer1 },
  { id: "2", img: customer2 },
  { id: "3", img: customer3 },
  { id: "4", img: customer4 },
  { id: "5", img: customer5 },
  { id: "6", img: customer6 },
];

export const ServicesData = [
  {
    id: "1",
    name: "تصميم المواقع الاكترونية ",
    img: ser1,
    info: "إنشاء موقع إلكتروني يوفر العديد من الفوائد للأعمال التجارية، بما في ذلك, زيادة الوصولية والوجود العالمي, تعزيز الثقة والمصداقية لدى العملاء, توفير معلومات شاملة حول المنتجات أو الخدمات, توفير معلومات شاملة حول المنتجات أو الخدمات, تفاعل مع العملاء وتوفير وسائل التواصل, تحليل أداء الموقع وفهم سلوك الزوار",
  },
  {
    id: "2",
    name: "برمجة تطبيقات الهاتف ",
    img: ser2,
    info: "إنشاء تطبيق للبيزنس الخاص بك مفيد لعدة أسباب. يمكن للتطبيق زيادة الوصولية لعملك وتسهيل وصول العملاء إلى منتجاتك أو خدماتك. كما يمكن تحسين تجربة المستخدم وتوفير واجهة سهلة الاستخدام وميزات مخصصة",
  },
  { id: "3", name: "تصميم هوية تجارية", img: ser1, info: "" },
  { id: "4", name: "تسويق الكتروني ", img: ser1, info: "" },
  { id: "5", name: "system ERP", img: ser1, info: "" },
];

export const PortfolioData = [
  {
    id: 1,
    des: "",
    type: "برمجة مواقع خاصة ",
    cusname: "شركة Magnify",
    img: por1,
    logo: logo1,
    bgColor: "#d9b693",
  },
];
