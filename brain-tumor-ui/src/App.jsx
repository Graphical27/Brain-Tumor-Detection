import { useState } from 'react';
import { Upload, Brain, AlertCircle, CheckCircle, Loader2, Info, FileImage } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result.split(',')[1];
        const response = await fetch('http://localhost:5000/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: `data:image/jpeg;base64,${base64String}` }),
        });
        const data = await response.json();
        if (response.ok) {
          setResult(data);
        } else {
          setError(data.error || 'Prediction failed.');
        }
        setLoading(false);
      };
      reader.readAsDataURL(selectedImage);
    } catch (err) {
      setError('An error occurred.');
      setLoading(false);
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 0.8) return 'text-green-600';
    if (confidence >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceLabel = (confidence) => {
    if (confidence >= 0.8) return 'High Confidence';
    if (confidence >= 0.6) return 'Medium Confidence';
    return 'Low Confidence';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Brain Tumor Detection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Advanced AI-powered analysis for early detection and classification of brain tumors using MRI imaging
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center mb-2">
                <Info className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-semibold">About Brain Tumors</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Definition:</strong> Abnormal growths of cells in the brain, which can be benign or malignant
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Causes:</strong> Genetic factors, radiation exposure, and inherited conditions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Importance:</strong> Early detection is crucial for effective treatment outcomes
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-center text-amber-800">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Medical Disclaimer</span>
                </div>
                <p className="text-amber-700 text-sm mt-1">
                  This tool is for educational purposes only. Always consult with healthcare professionals for medical diagnosis.
                </p>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
              <div className="flex items-center mb-2">
                <FileImage className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-semibold">Upload MRI Image</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* File Upload Area */}
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    id="file-upload"
                  />
                  <div
                    className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedImage
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {selectedImage ? (
                        <>
                          <CheckCircle className="w-10 h-10 text-green-500 mb-2" />
                          <p className="text-sm text-green-600 font-medium">
                            {selectedImage.name}
                          </p>
                          <p className="text-xs text-gray-500">Click to change image</p>
                        </>
                      ) : (
                        <>
                          <Upload className="w-10 h-10 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 font-medium">
                            Drop your MRI image here
                          </p>
                          <p className="text-xs text-gray-500">or click to browse</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Preview */}
                {previewUrl && (
                  <div className="relative">
                    <div className="bg-gray-100 rounded-xl p-4">
                      <img
                        src={previewUrl}
                        alt="MRI Preview"
                        className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!selectedImage || loading}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                    !selectedImage || loading
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5" />
                      <span>Detect Tumor</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center text-red-800">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Error</span>
            </div>
            <p className="text-red-700 mt-1">{error}</p>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Analysis Results</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Main Result */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Detected Tumor Type
                    </label>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {result.prediction}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Confidence Level
                    </label>
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            result.confidence >= 0.8 ? 'bg-green-500' :
                            result.confidence >= 0.6 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${result.confidence * 100}%` }}
                        ></div>
                      </div>
                      <span className={`text-lg font-bold ${getConfidenceColor(result.confidence)}`}>
                        {(result.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${getConfidenceColor(result.confidence)}`}>
                      {getConfidenceLabel(result.confidence)}
                    </p>
                  </div>
                </div>

                {/* Probability Breakdown */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-3 block">
                    All Classifications
                  </label>
                  <div className="space-y-2">
                    {Object.entries(result.probabilities)
                      .sort(([,a], [,b]) => b - a)
                      .map(([type, prob]) => (
                        <div key={type} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {type.replace('_', ' ')}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${prob * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-600 w-12 text-right">
                              {(prob * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;