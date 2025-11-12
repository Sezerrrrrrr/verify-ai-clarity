import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg-dental-clinic.png";

const Calculator = () => {
  const [dailyHours, setDailyHours] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [dailyPatients, setDailyPatients] = useState("");
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Check if all fields are filled
  const allFieldsFilled = dailyHours && hourlyRate && dailyPatients;

  // Reset results when inputs change
  useEffect(() => {
    setShowResults(false);
  }, [dailyHours, hourlyRate, dailyPatients]);

  // Calculation logic based on the screenshot
  const workingDays = 260; // Working days per year
  const successRate = 0.95; // 95% success rate
  const azopsCostPerVerification = 2;
  const timePerVerificationAzops = 1; // 1 minute with Azops
  
  const dailyHoursNum = parseFloat(dailyHours) || 0;
  const hourlyRateNum = parseFloat(hourlyRate) || 0;
  const dailyPatientsNum = parseFloat(dailyPatients) || 0;

  // Current Cost: Daily hours × Hourly rate × Working days (260/year)
  const currentAnnualCost = dailyHoursNum * hourlyRateNum * workingDays;

  // Azops Cost: $2 per successful verification × Daily patients × Success rate (95%) × Working days
  const annualVerifications = dailyPatientsNum * successRate * workingDays;
  const azopsAnnualCost = azopsCostPerVerification * dailyPatientsNum * successRate * workingDays;

  // Net savings
  const netSavings = currentAnnualCost - azopsAnnualCost;

  // Time Saved: (Current hours - 1 min per verification) × Working days
  const currentMinutesPerDay = dailyHoursNum * 60;
  const azopsMinutesPerDay = dailyPatientsNum * timePerVerificationAzops;
  const timeReductionPercentage = ((currentMinutesPerDay - azopsMinutesPerDay) / currentMinutesPerDay) * 100;
  const monthlyTimeSavedHours = ((currentMinutesPerDay - azopsMinutesPerDay) * workingDays) / 60 / 12;

  // Current time per verification
  const currentTimePerVerification = dailyPatientsNum > 0 ? (dailyHoursNum * 60) / dailyPatientsNum : 0;

  const handleShowResults = () => {
    if (email) {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Input Form */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-primary/10">
              <h1 className="text-3xl font-bold text-foreground mb-4">How much money can you save every year by implementing an AI insurer verifier</h1>
              <p className="text-muted-foreground mb-8">
                Enter your current insurance verification metrics to calculate your potential ROI with Azops AI. 
                Our calculator uses real practice data to project your time and cost savings.
              </p>

              <TooltipProvider>
                <div className="space-y-6">
                  {/* Daily Hours */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Label htmlFor="dailyHours" className="text-foreground font-medium">
                        Daily hours spent on insurance verification
                      </Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Average hours your staff spends per day on insurance verification tasks</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input
                      id="dailyHours"
                      type="number"
                      step="0.5"
                      placeholder="e.g., 9"
                      value={dailyHours}
                      onChange={(e) => setDailyHours(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  {/* Hourly Rate */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Label htmlFor="hourlyRate" className="text-foreground font-medium">
                        Hourly rate of staff member
                      </Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Average hourly rate including benefits</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="hourlyRate"
                        type="number"
                        step="1"
                        placeholder="e.g., 25"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                        className="pl-7 text-lg"
                      />
                    </div>
                  </div>

                  {/* Daily Patients */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Label htmlFor="dailyPatients" className="text-foreground font-medium">
                        Daily patients needing verification
                      </Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Number of patients requiring insurance verification each day</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input
                      id="dailyPatients"
                      type="number"
                      step="1"
                      placeholder="e.g., 27"
                      value={dailyPatients}
                      onChange={(e) => setDailyPatients(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  {/* Email Field - Only shows when all fields filled */}
                  {allFieldsFilled && !showResults && (
                    <div className="animate-fade-in">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email address
                      </Label>
                      <div className="flex gap-3 mt-2">
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="text-lg flex-1"
                        />
                        <Button
                          onClick={handleShowResults}
                          disabled={!email}
                          className="relative overflow-hidden border-2 border-primary text-foreground bg-primary/10 hover:text-primary hover:[text-shadow:0_0_20px_rgba(59,130,246,0.8)] hover:bg-primary/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 font-sf-pro px-8"
                        >
                          Show Results
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </TooltipProvider>

              {/* Calculation Explanation - Collapsible */}
              <Collapsible className="mt-8">
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-left group">
                    <p className="text-sm font-semibold text-amber-900">How we calculate your savings:</p>
                    <ChevronDown className="w-4 h-4 text-amber-900 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="text-sm text-amber-800 space-y-1">
                      <p><strong>Current Cost:</strong> Daily hours × Hourly rate × Working days (260/year)</p>
                      <p><strong>Azops Cost:</strong> $2 per successful verification × Daily patients × Success rate (95%) × Working days</p>
                      <p><strong>Time Saved:</strong> (Current hours - 1 min per verification) × Working days</p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>

            {/* Right Column - Results */}
            <div className={`transition-all duration-500 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-primary/10">
                <h2 className="text-3xl font-bold text-foreground mb-8">Results Summary</h2>

                {/* Annual Savings Card */}
                <div className="bg-gradient-to-br from-primary via-primary to-accent p-8 rounded-2xl mb-8 text-center">
                  <p className="text-primary-foreground/90 text-sm font-sf-pro uppercase tracking-wider mb-3">
                    YOUR ANNUAL SAVINGS
                  </p>
                  <p className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                    ${Math.round(netSavings).toLocaleString()}
                  </p>
                  <p className="text-primary-foreground/80 text-sm">per year with Azops</p>
                </div>

                {/* Key Metrics */}
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Monthly Time Saved</span>
                    <span className="text-2xl font-bold text-emerald-600">
                      {Math.round(monthlyTimeSavedHours)} <span className="text-base font-normal">hours</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Annual Verifications</span>
                    <span className="text-2xl font-bold text-emerald-600">
                      {Math.round(annualVerifications).toLocaleString()} <span className="text-base font-normal">verifications</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Staff Time Per Verification</span>
                    <span className="text-2xl font-bold text-emerald-600">
                      -{Math.round(timeReductionPercentage)}% <span className="text-base font-normal text-muted-foreground">
                        ({Math.round(currentTimePerVerification)} min vs current)
                      </span>
                    </span>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Cost Breakdown (Annual)</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Current annual cost</span>
                      <span className="text-xl font-semibold text-foreground">
                        ${Math.round(currentAnnualCost).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Azops annual cost</span>
                      <span className="text-xl font-semibold text-foreground">
                        ${Math.round(azopsAnnualCost).toLocaleString()}
                      </span>
                    </div>

                    <div className="h-px bg-border my-4" />

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Net savings</span>
                      <span className="text-2xl font-bold text-emerald-600">
                        ${Math.round(netSavings).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Success rate</span>
                      <span className="text-lg font-semibold text-foreground">95%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Cost per verification</span>
                      <span className="text-lg font-semibold text-foreground">$2.00</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full mt-8 relative overflow-hidden border-2 border-primary text-foreground bg-primary/10 hover:text-primary hover:[text-shadow:0_0_20px_rgba(59,130,246,0.8)] hover:bg-primary/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] shadow-[0_0_30px_rgba(59,130,246,0.3)] font-sf-pro text-lg py-6 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
                  asChild
                >
                  <a href="/demo">
                    See a Video Demo →
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calculator;
