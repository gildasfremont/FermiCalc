import React from 'react';

const ColorPalette = () => {
  const colors = [
    // Primary Blue (Swiss Precision)
    { name: 'primary-900', hex: '#061D4D' },
    { name: 'primary-800', hex: '#072463' },
    { name: 'primary-700', hex: '#08327D' },  // Original brand color
    { name: 'primary-600', hex: '#0A3D97' },
    { name: 'primary-500', hex: '#0B48B1' },
    { name: 'primary-400', hex: '#2E67C7' },
    { name: 'primary-300', hex: '#5181D3' },
    { name: 'primary-200', hex: '#84A7E0' },
    { name: 'primary-100', hex: '#B7CCED' },

    // Secondary Teal (Swiss Modernism)
    { name: 'secondary-900', hex: '#2A4442' },
    { name: 'secondary-800', hex: '#3F6764' },
    { name: 'secondary-700', hex: '#558A86' },  // Original brand color
    { name: 'secondary-600', hex: '#699D99' },
    { name: 'secondary-500', hex: '#7DAFAB' },
    { name: 'secondary-400', hex: '#91C1BE' },
    { name: 'secondary-300', hex: '#A5D4D1' },
    { name: 'secondary-200', hex: '#B9E6E4' },
    { name: 'secondary-300', hex: '#CDF8F6' },

    // Dark (Swiss Contrast)
    { name: 'dark-900', hex: '#0F0A01' },  // Original brand color
    { name: 'dark-800', hex: '#272218' },
    { name: 'dark-700', hex: '#3F3A2F' },
    { name: 'dark-600', hex: '#575246' },
    { name: 'dark-500', hex: '#6F6A5D' },
    { name: 'dark-400', hex: '#878274' },
    { name: 'dark-300', hex: '#9F9A8B' },
    { name: 'dark-200', hex: '#B7B2A2' },
    { name: 'dark-100', hex: '#CFCAB9' },

    // Light (Swiss White Space)
    { name: 'light-900', hex: '#D9D9D9' },
    { name: 'light-800', hex: '#E3E3E3' },
    { name: 'light-700', hex: '#EBEBEB' },
    { name: 'light-600', hex: '#F1F1F1' },
    { name: 'light-500', hex: '#F5F5F5' },
    { name: 'light-400', hex: '#F8F8F8' },
    { name: 'light-300', hex: '#F9F9F9' },
    { name: 'light-200', hex: '#FAFAFA' },
    { name: 'light-100', hex: '#FBFBFB' }  // Original brand color
  ];

  return (
    <div className="p-8">
      <div className="flex flex-col gap-2">
        {colors.map((color) => (
          <div key={color.name} className="flex items-center gap-3">
            <div 
              className="w-5 h-5 rounded-sm border border-gray-200" 
              style={{ backgroundColor: color.hex }}
            />
            <span className="font-mono text-sm">`{color.name}`</span>
            <span className="font-mono text-sm">`{color.hex}`</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
