
import outbound from "../assets/Outbound.png";
import companyDesc from "../assets/Company Desc.png";
import navColumns from "../assets/Nav Columns.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 py-8 sm:px-8 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <img
          src={companyDesc}
          alt="Jadoo company description"
          className="h-auto w-full max-w-[180px] object-contain"
        />

        <img
          src={navColumns}
          alt="Footer navigation links"
          className="h-auto w-full max-w-[400px] object-contain"
        />

        <img
          src={outbound}
          alt="Social media and app download links"
          className="h-auto w-full max-w-[210px] object-contain"
        />
      </div>
    </footer>
  );
}
