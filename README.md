# 🧠 Brain Tumor Detection AI

> Advanced AI-powered brain tumor detection and classification system using deep learning and MRI image analysis.

![Brain Tumor Detection](https://img.shields.io/badge/AI-Brain%20Tumor%20Detection-blue?style=for-the-badge&logo=brain&logoColor=white)
![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.0+-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Model Architecture](#-model-architecture)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🎯 Overview

This project implements a state-of-the-art deep learning solution for automated brain tumor detection and classification from MRI scans. The system combines a robust machine learning backend with an intuitive React frontend to provide accurate, real-time analysis of medical imaging data.

### 🏥 Medical Applications
- **Early Detection**: Identify potential brain tumors in MRI scans
- **Classification**: Distinguish between different tumor types
- **Screening Tool**: Assist radiologists in preliminary analysis
- **Educational**: Medical training and research purposes

⚠️ **Important**: This tool is designed for educational and research purposes only. Always consult qualified healthcare professionals for medical diagnosis and treatment decisions.

## ✨ Features

### 🖥️ Frontend Features
- **Modern UI/UX**: Clean, professional interface with gradient designs
- **Drag & Drop Upload**: Intuitive file upload with visual feedback
- **Real-time Analysis**: Instant processing and results display
- **Confidence Visualization**: Interactive progress bars and charts
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Error Handling**: Comprehensive error management and user feedback

### 🤖 AI/ML Features
- **Deep Learning Model**: CNN-based architecture for image classification
- **Multi-class Classification**: Supports various tumor types
- **Confidence Scoring**: Probability distribution for all classes
- **High Accuracy**: Trained on comprehensive medical imaging datasets
- **Fast Inference**: Optimized for real-time predictions

### 🛠️ Technical Features
- **RESTful API**: Clean, documented backend endpoints
- **Image Processing**: Advanced preprocessing pipeline
- **Base64 Encoding**: Secure image transmission
- **CORS Support**: Cross-origin resource sharing enabled

## 🚀 Tech Stack

### Frontend
- **React 18+** - Modern UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

### Backend
- **Python 3.8+** - Core backend language
- **Flask** - Lightweight web framework
- **TensorFlow/Keras** - Deep learning framework
- **PIL (Pillow)** - Image processing library
- **NumPy** - Numerical computing

### Development Tools
- **ESLint** - Code linting and formatting
- **Git** - Version control
- **npm** - Package management

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+
- Git

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/brain-tumor-detection.git
cd brain-tumor-detection

# Navigate to frontend directory
cd brain-tumor-ui

# Install dependencies
npm install

# Install required icon library
npm install lucide-react

# Start development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd ../backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

### 📄 Requirements.txt
```txt
Flask==2.3.3
Flask-CORS==4.0.0
tensorflow==2.13.0
Pillow==10.0.0
numpy==1.24.3
opencv-python==4.8.0.76
```

## 🎮 Usage

### Quick Start

1. **Start the Backend Server**
   ```bash
   cd backend
   python app.py
   ```
   Server runs on `http://localhost:5000`

2. **Start the Frontend**
   ```bash
   cd brain-tumor-ui
   npm run dev
   ```
   App runs on `http://localhost:5173`

3. **Upload and Analyze**
   - Open the web application
   - Drag and drop an MRI image or click to browse
   - Click "Detect Tumor" to analyze
   - View results with confidence scores

### Supported Image Formats
- JPEG (.jpg, .jpeg)
- PNG (.png)
- BMP (.bmp)
- TIFF (.tiff)

## 📡 API Documentation

### Endpoints

#### POST `/predict`
Analyzes an uploaded MRI image for brain tumor detection.

**Request Body:**
```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
}
```

**Response:**
```json
{
  "prediction": "meningioma",
  "confidence": 0.89,
  "probabilities": {
    "glioma": 0.05,
    "meningioma": 0.89,
    "no_tumor": 0.02,
    "pituitary": 0.04
  }
}
```

**Error Response:**
```json
{
  "error": "Invalid image format or processing error"
}
```

## 🧠 Model Architecture

### CNN Architecture
- **Input Layer**: 224x224x3 RGB images
- **Convolutional Layers**: Multiple conv layers with ReLU activation
- **Pooling Layers**: Max pooling for dimensionality reduction
- **Dropout Layers**: Regularization to prevent overfitting
- **Dense Layers**: Fully connected layers for classification
- **Output Layer**: Softmax activation for multi-class probability

### Training Details
- **Dataset**: Comprehensive brain MRI image dataset
- **Classes**: Glioma, Meningioma, Pituitary Tumor, No Tumor
- **Preprocessing**: Normalization, augmentation, resizing
- **Optimization**: Adam optimizer with learning rate scheduling
- **Validation**: K-fold cross-validation for robust evaluation

## 📸 Screenshots

### Main Interface
![Main Interface](./screenshots/main-interface.png)

### Image Upload
![Image Upload](./screenshots/upload-interface.png)

### Analysis Results
![Results Display](./screenshots/results-display.png)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the Repository**
   ```bash
   git fork https://github.com/yourusername/brain-tumor-detection.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests for new features

4. **Commit Changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

### Contribution Areas
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🧪 Test coverage expansion
- 🎨 UI/UX improvements
- 🤖 Model optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Brain Tumor Detection Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

- **Medical Community**: For providing valuable insights and feedback
- **Open Source Libraries**: React, TensorFlow, Flask, and all dependencies
- **Dataset Contributors**: Researchers who made medical imaging datasets available
- **Healthcare Professionals**: For guidance on medical accuracy and ethics


---

<div align="center">

**Made with ❤️ for the medical AI community**

[⬆ Back to Top](#-brain-tumor-detection-ai)

</div>
