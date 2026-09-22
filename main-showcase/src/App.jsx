import React, { useState } from 'react';

export default function MainHub() {
  const [selectedFramework, setSelectedFramework] = useState('react');
  const [activeTab, setActiveTab] = useState('preview');

  //  (Local Development)
  const frameworkUrls = {
    react: 'https://reactttttttttt.netlify.app/',
    vue: 'https://vueeeeeeeeeeeee.netlify.app/',
    angular: 'https://augularrrrrr.netlify.app/'
  };

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-between">
      {/* Top Navbar / Header Hub */}
      <nav className="navbar navbar-dark bg-black border-bottom border-secondary px-4 py-3">
        <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div className="d-flex align-items-center flex-wrap gap-3">
            <div>
              <h1 className="fw-bold fs-4 text-white mb-0 d-flex align-items-center flex-wrap gap-2">
                <span>CarLoyal</span> 
                <span className="badge px-2 py-1 ">Multi-Framework Showcase</span>
              </h1>
              <p className="text-light opacity-75 small mb-0">Live Framework Comparison & Testing Hub</p>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="btn-group shadow-sm" role="group">
            <button 
              className={`btn ${activeTab === 'preview' ? 'btn-primary' : 'btn-outline-light'} px-3`}
              onClick={() => setActiveTab('preview')}
            >
              <i className="bi bi-display me-2"></i> Live Preview
            </button>
            <button 
              className={`btn ${activeTab === 'report' ? 'btn-success' : 'btn-outline-light'} px-3`}
              onClick={() => setActiveTab('report')}
            >
              <i className="bi bi-file-earmark-text me-2"></i> Comparison Report
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container-fluid py-4 flex-grow-1 d-flex flex-column">
        {activeTab === 'preview' ? (
          <div className="d-flex flex-column flex-grow-1">
            {/* Framework Selector Toolbar */}
            <div className="text-center mb-3">
              <div className="btn-group shadow" role="group">
                <button 
                  className={`btn fw-bold px-4 ${selectedFramework === 'react' ? 'btn-info text-dark shadow' : 'btn-outline-light opacity-75'}`}
                  onClick={() => setSelectedFramework('react')}
                >
                  <i className="bi bi-atom me-2"></i> React (5174)
                </button>
                <button 
                  className={`btn fw-bold px-4 ${selectedFramework === 'vue' ? 'btn-success text-white shadow' : 'btn-outline-light opacity-75'}`}
                  onClick={() => setSelectedFramework('vue')}
                >
                  <i className="bi bi-box-seam me-2"></i> Vue (5175)
                </button>
                <button 
                  className={`btn fw-bold px-4 ${selectedFramework === 'angular' ? 'btn-danger text-white shadow' : 'btn-outline-light opacity-75'}`}
                  onClick={() => setSelectedFramework('angular')}
                >
                  <i className="bi bi-shield-check me-2"></i> Angular (4200)
                </button>
              </div>
            </div>

            {/* iframe Container */}
            <div className="card bg-black border-secondary rounded-3 shadow-lg overflow-hidden flex-grow-1" style={{ minHeight: '82vh' }}>
              <iframe 
                src={frameworkUrls[selectedFramework]} 
                title="Framework Preview"
                className="w-100 h-100 border-0 bg-white"
                style={{ minHeight: '82vh' }}
              />
            </div>
          </div>
        ) : (
          /* Interactive Comparison Report */
          <div className="container py-3 text-dark">
            <div className="card shadow-lg border-0 p-4 mb-4 bg-white rounded-3">
              <div className="text-center mb-5">
                <span className="badge bg-primary px-3 py-2 mb-2">Technical Analysis</span>
                <h2 className="fw-bold display-5 text-dark">Framework Comparison Study</h2>
                <p className="lead text-secondary">Analyzing architecture, state management, and developer experience across frameworks.</p>
              </div>

              {/* Summary Matrix */}
              <h3 className="fw-bold mb-3 text-dark">
                <i className="bi bi-table text-primary me-2"></i> Executive Summary Matrix
              </h3>
              <div className="table-responsive mb-5">
                <table className="table table-hover align-middle table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>Comparison Criteria</th>
                      <th>React (JSX + Hooks)</th>
                      <th>Vue 3 (Composition API)</th>
                      <th>Angular / Vanilla</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">State Management</td>
                      <td><code>useState</code> Hook</td>
                      <td><code>ref()</code> Reactive State</td>
                      <td>Angular Signals / Native DOM</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Developer Experience (DX)</td>
                      <td>Moderate (Component-based)</td>
                      <td><span className="badge bg-success">Fastest</span> (Intuitive Templates)</td>
                      <td>Structured & Boilerplate heavy</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Styling Integration</td>
                      <td>Bootstrap 5 Utilities</td>
                      <td>Bootstrap 5 + Scoped CSS</td>
                      <td>Bootstrap 5 Global Classes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-3 border-top border-secondary">
        <p className="mb-0 text-light opacity-75 small">CarLoyal Multi-Framework Showcase & Study Report © 2026</p>
      </footer>
    </div>
  );
}