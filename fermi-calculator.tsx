import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowRight, X, AlertCircle } from 'lucide-react';

const FermiQuestion = ({ title, options, value, onChange, children, description }) => (
  <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {description && (
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
    )}
    {children}
    <div className="flex gap-4 flex-wrap mt-4">
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => onChange(option.value)}
          variant={value === option.value ? "default" : "outline"}
          className="flex-1 min-w-[200px] p-4"
        >
          <div className="w-full text-center">
            <div className="font-semibold">{option.label}</div>
            {option.description && (
              <div className="text-sm opacity-80 mt-1">{option.description}</div>
            )}
          </div>
        </Button>
      ))}
    </div>
  </div>
);

const FermiCalculator = () => {
  const [features, setFeatures] = useState([
    { id: 1, name: 'Feature A', revenue: 0, customerCare: 0, effort: 0, confidence: 0 }
  ]);
  const [activeFeature, setActiveFeature] = useState(0);

  const revenueOptions = [
    { value: 1000, label: "$1,000/year", description: "A minor improvement for a few customers" },
    { value: 10000, label: "$10,000/year", description: "Noticeable value for several customers" },
    { value: 100000, label: "$100,000/year", description: "Major value for many customers" },
    { value: 1000000, label: "$1,000,000/year", description: "Transformative value for most customers" }
  ];

  const customerCareOptions = [
    { value: 1, label: "Meh, whatever", description: "Customers are indifferent or mildly interested" },
    { value: 10, label: "I'm curious", description: "Customers want to learn more about this" },
    { value: 100, label: "Serious concern", description: "This addresses a significant pain point" },
    { value: 1000, label: "Mission critical", description: "This is essential for customer success" }
  ];

  const effortOptions = [
    { value: 2, label: "2 days", description: "Small, well-defined task" },
    { value: 10, label: "2 weeks", description: "Medium complexity, clear requirements" },
    { value: 45, label: "2 months", description: "Large project, may have unknowns" }
  ];

  const confidenceOptions = [
    { 
      value: 1, 
      label: "I mean, we can try...", 
      description: "High uncertainty, novel problem space" 
    },
    { 
      value: 10, 
      label: "We can probably do this", 
      description: "Some unknowns but familiar territory" 
    },
    { 
      value: 100, 
      label: "Completely within expertise", 
      description: "We've done this before successfully" 
    }
  ];

  const calculateROI = (feature) => {
    const impact = (feature.revenue * feature.customerCare * feature.confidence) / 100;
    return Math.round(impact / feature.effort);
  };

  const handleAddFeature = () => {
    const newFeature = {
      id: features.length + 1,
      name: `Feature ${String.fromCharCode(65 + features.length)}`,
      revenue: 0,
      customerCare: 0,
      effort: 0,
      confidence: 0
    };
    setFeatures([...features, newFeature]);
    setActiveFeature(features.length);
  };

  const updateFeature = (field, value) => {
    setFeatures(features.map((feature, index) => 
      index === activeFeature ? { ...feature, [field]: value } : feature
    ));
  };

  const removeFeature = (indexToRemove) => {
    setFeatures(features.filter((_, index) => index !== indexToRemove));
    if (activeFeature >= indexToRemove && activeFeature > 0) {
      setActiveFeature(activeFeature - 1);
    }
  };

  const currentFeature = features[activeFeature];
  const sortedFeatures = [...features]
    .map(f => ({ 
      ...f, 
      roi: f.effort ? calculateROI(f) : 0,
      isComplete: f.revenue && f.customerCare && f.effort && f.confidence
    }))
    .sort((a, b) => b.roi - a.roi);

  const getAnalysis = (features) => {
    const complete = features.filter(f => f.isComplete);
    if (complete.length === 0) return null;

    const best = complete[0];
    const bestRatio = complete.length > 1 ? Math.round((best.roi / complete[1].roi) * 100 - 100) : 0;
    
    const analysis = [];

    // Add primary recommendation
    if (best.roi > 0) {
      analysis.push({
        type: 'primary',
        content: `${best.name} is the most efficient choice with an ROI of ${best.roi.toLocaleString()}`
      });

      if (complete.length > 1 && bestRatio > 50) {
        analysis.push({
          type: 'highlight',
          content: `Its ROI is ${bestRatio}% higher than the next best option`
        });
      }
    }

    // Add confidence insight
    if (best.confidence === 100) {
      analysis.push({
        type: 'positive',
        content: 'We have high confidence in our ability to execute this feature successfully'
      });
    } else if (best.confidence === 1) {
      analysis.push({
        type: 'warning',
        content: 'Consider running a spike or prototype first due to low confidence'
      });
    }

    // Add effort insight
    if (best.effort === 2) {
      analysis.push({
        type: 'positive',
        content: 'This is a quick win that could be delivered in days'
      });
    } else if (best.effort === 45) {
      analysis.push({
        type: 'warning',
        content: 'This is a significant investment - consider breaking it into smaller deliverables'
      });
    }

    return analysis;
  };

  const analysisPoints = getAnalysis(sortedFeatures);

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Fermi Feature Estimation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          {features.map((feature, index) => (
            <div key={feature.id} className="relative">
              <Button
                variant={index === activeFeature ? "default" : "outline"}
                onClick={() => setActiveFeature(index)}
                className="mr-2"
              >
                {feature.name}
              </Button>
              {features.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full"
                  onClick={() => removeFeature(index)}
                >
                  <X size={12} />
                </Button>
              )}
            </div>
          ))}
          <Button variant="outline" onClick={handleAddFeature} className="flex items-center gap-2">
            <Plus size={16} /> Add Feature
          </Button>
        </div>

        <FermiQuestion
          title="What's the expected annual revenue impact?"
          description="Consider direct revenue from sales, upgrades, or reduced churn"
          options={revenueOptions}
          value={currentFeature.revenue}
          onChange={(value) => updateFeature('revenue', value)}
        />

        <FermiQuestion
          title="How much do customers care about this?"
          description="Based on customer feedback and market research"
          options={customerCareOptions}
          value={currentFeature.customerCare}
          onChange={(value) => updateFeature('customerCare', value)}
        />

        <FermiQuestion
          title="How much effort would this take?"
          description="Include design, development, testing, and deployment"
          options={effortOptions}
          value={currentFeature.effort}
          onChange={(value) => updateFeature('effort', value)}
        />

        <FermiQuestion
          title="How confident are we in our execution?"
          description="Consider technical complexity and team expertise"
          options={confidenceOptions}
          value={currentFeature.confidence}
          onChange={(value) => updateFeature('confidence', value)}
        />

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Analysis</h3>
          {!analysisPoints && (
            <div className="flex items-center gap-2 text-gray-600">
              <AlertCircle size={16} />
              Complete all questions for at least one feature to see analysis
            </div>
          )}
          {analysisPoints && (
            <div className="space-y-4">
              {analysisPoints.map((point, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded ${
                    point.type === 'primary' ? 'bg-blue-100 font-medium' :
                    point.type === 'highlight' ? 'bg-green-100' :
                    point.type === 'warning' ? 'bg-yellow-100' :
                    'bg-white'
                  }`}
                >
                  {point.content}
                </div>
              ))}
              
              <div className="mt-6 pt-4 border-t border-blue-200">
                <div className="font-medium mb-2">Complete Rankings:</div>
                {sortedFeatures
                  .filter(f => f.isComplete)
                  .map((feature, index) => (
                  <div key={feature.id} className="flex items-center gap-2 mb-2">
                    <ArrowRight size={16} className={index === 0 ? "text-green-500" : "text-gray-400"} />
                    <span className={index === 0 ? "font-semibold" : ""}>
                      {feature.name}: {feature.roi.toLocaleString()} ROI
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FermiCalculator;
