import React from "react";

const RealEstateHome = () => {
  return (
    <div className="w-full font-sans text-gray-900 bg-fondoDev">
    
      {/* Contenido inferior */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 bg-white/80 backdrop-blur-md rounded-t-2xl shadow-xl -mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Technical Specifications
        </h2>

        <p className="text-center text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Organize is a system to keep your desk tidy and photo-worthy all day
          long. Procrastinate your work while you meticulously arrange items
          into dedicated trays.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Origin
            </h4>
            <p className="text-gray-600">Designed by Good Goods, Inc.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Material
            </h4>
            <p className="text-gray-600">
              Solid walnut base with rare earth magnets and polycarbonate
              add-ons.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Dimensions
            </h4>
            <p className="text-gray-600">15&quot; x 3.75&quot; x .75&quot;</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Finish
            </h4>
            <p className="text-gray-600">
              Hand sanded and finished with natural oil
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Includes
            </h4>
            <p className="text-gray-600">
              Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Considerations
            </h4>
            <p className="text-gray-600">
              Made from natural materials. Grain and color vary with each item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateHome;
