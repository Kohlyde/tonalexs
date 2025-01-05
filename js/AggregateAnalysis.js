// Central Aggregation Module

// Independent Analysis Modules
import { analyzeMetrics } from './metrics.js';
import { analyzeSpectogram } from './spectogram.js';
import { analyzeMetricas } from './metricas.js';

// Unified Aggregation Function
async function aggregateAnalyses(file) {
    try {
        const metricasResult = await analyzeMetricas(file);
        const metricsResult = await analyzeMetrics(file);
        const spectogramResult = await analyzeSpectogram(file);

        // Combine Results
        const aggregatedResults = {
            metricas: metricasResult,
            metrics: metricsResult,
            spectogram: spectogramResult,
        };

        // Validate Results
        validateResults(aggregatedResults);

        // Report Results
        return reportResults(aggregatedResults);
    } catch (error) {
        console.error('Error during aggregation:', error);
        return { error: 'Analysis failed. Please check the logs for details.' };
    }
}

// Validation Function
function validateResults(results) {
    // Example Validation: Check for NaN or mismatched ranges
    Object.keys(results).forEach(key => {
        if (!results[key] || typeof results[key] !== 'object') {
            throw new Error(`Invalid data in ${key} analysis`);
        }
    });
    console.log('Validation successful.');
}

// Reporting Function
function reportResults(results) {
    // Combine into a user-friendly format (e.g., JSON or table)
    const report = {
        summary: {
            totalMetrics: Object.keys(results.metrics || {}).length,
            totalSpectogramFeatures: Object.keys(results.spectogram || {}).length,
            totalMetricasCalculations: Object.keys(results.metricas || {}).length,
        },
        details: results,
    };

    console.log('Aggregated Report:', report);
    return report;
}

// Usage Example
// Assuming a file is provided from the UI or input
// aggregateAnalyses(selectedFile).then(report => console.log(report));

export { aggregateAnalyses };
