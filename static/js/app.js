class FermiCalculator {
    // ... [Previous code up to getAnalysis remains unchanged]

    getAnalysis() {
        try {
            const roi = this.calculateROI();
            const unanswered = this.getUnansweredQuestions();
            
            // Only block analysis for truly unanswered questions
            if (unanswered.length > 0) {
                return {
                    complete: false,
                    unanswered,
                    points: []
                };
            }

            const analysis = [];

            // Always show analysis points even if ROI is 0
            analysis.push({
                type: 'primary',
                content: `ROI: ${roi.toLocaleString()}`
            });

            // Update confidence handling
            if (this.state.confidence === 0) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('confidence-0-desc')
                });
            } else if (this.state.confidence === 100) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('high-confidence')
                });
            } else if (this.state.confidence <= 1) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('low-confidence')
                });
            }

            // Update team excitement handling
            if (this.state.teamExcitement === 0) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('excitement-0-desc')
                });
            } else if (this.state.teamExcitement === 100) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('high-team-excitement')
                });
            } else if (this.state.teamExcitement < 10) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('low-team-excitement')
                });
            }

            // Always include effort analysis
            if (this.state.effort === 2) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('quick-win')
                });
            } else if (this.state.effort === 45) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('large-effort')
                });
            }

            return {
                complete: true,
                points: analysis
            };
        } catch (error) {
            console.error('Error getting analysis:', error);
            this.handleError('analysis', error);
            return null;
        }
    }

    calculateROI() {
        try {
            // Only block calculation if effort is missing
            if (!this.state.effort) return 0;
            
            // Calculate impact even with zero values
            const impact = (
                this.state.customerReach * 
                this.state.customerCare * 
                this.state.insight * 
                this.state.productPayoff * 
                (this.state.confidence || 1) // Use 1 if confidence is 0
            ) / 10000;
            
            const roi = Math.round((this.state.revenue * impact) / this.state.effort);
            return roi;
        } catch (error) {
            console.error('Error calculating ROI:', error);
            this.handleError('analysis', error);
            return 0;
        }
    }
}
