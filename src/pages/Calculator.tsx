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

  // Check if any inputs are entered
  const hasAnyInput = dailyHours || hourlyRate || dailyPatients;

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
  const timeReductionPercentage = (currentMinutesPerDay - azopsMinutesPerDay) / currentMinutesPerDay * 100;
  const monthlyTimeSavedHours = (currentMinutesPerDay - azopsMinutesPerDay) * workingDays / 60 / 12;

  // Current time per verification
  const currentTimePerVerification = dailyPatientsNum > 0 ? dailyHoursNum * 60 / dailyPatientsNum : 0;
  const handleShowResults = () => {
    if (email) {
      setShowResults(true);
    }
  };
  return <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
      </div>
      
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Input Form */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-primary/10 max-w-sm">
              <h1 className="text-3xl font-bold text-foreground mb-4">How much money can you save every year by implementing an AI insurer verifier</h1>
              <p className="text-muted-foreground mb-8">Calculate your potential ROI with Azops. Our calculator uses real practice data to project your time and cost savings.</p>

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
                          <p>Total hours spent by the office manager, front desk, billing specialist or any other person in your team that helps with insurance verification.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input id="dailyHours" type="number" step="0.5" placeholder="Add Numeric Value" value={dailyHours} onChange={e => setDailyHours(e.target.value)} className="text-sm max-w-[180px] placeholder:text-xs" />
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
                          <p>Average hourly rate of the people working on insurance verification.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input id="hourlyRate" type="number" step="1" placeholder="Add Numeric Value" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} className="pl-7 text-sm max-w-[180px] placeholder:text-xs" />
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
                          <p>How many patients (existing or new) do you need to verify insurance for.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input id="dailyPatients" type="number" step="1" placeholder="Add Numeric Value" value={dailyPatients} onChange={e => setDailyPatients(e.target.value)} className="text-sm max-w-[180px] placeholder:text-xs" />
                  </div>

                  {/* Email Field - Only shows when all fields filled */}
                  {allFieldsFilled && !showResults && <div className="animate-fade-in">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email address
                      </Label>
                      <div className="flex gap-3 mt-2">
                        <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="text-lg flex-[2]" />
                        <Button onClick={handleShowResults} disabled={!email} className="relative overflow-hidden border-2 border-black text-white bg-black hover:text-gray-300 hover:[text-shadow:0_0_20px_rgba(0,0,0,0.8)] hover:bg-black hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] shadow-[0_0_30px_rgba(0,0,0,0.5)] font-sf-pro px-4 whitespace-nowrap transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black/60 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                          Show Results
                        </Button>
                      </div>
                    </div>}
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
            <div className="transition-all duration-500">
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-2xl border border-primary/10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 font-recoleta">Results Summary</h2>

                {/* Annual Savings Card */}
                <div className="relative overflow-hidden rounded-3xl mb-6 sm:mb-8">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-90"></div>
                  
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
                  
                  {/* Decorative circles */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
                  
                  {/* Content */}
                  <div className="relative p-6 sm:p-10 text-center">
                    <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-3 sm:mb-4">
                      <p className="text-white/95 text-xs font-sf-pro font-semibold uppercase tracking-wider">
                        Your Annual Savings
                      </p>
                    </div>
                    
                    <p className={`text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-2 sm:mb-3 font-recoleta tracking-tight ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                      {allFieldsFilled ? `$${Math.round(netSavings).toLocaleString()}` : '$---'}
                    </p>
                    
                    <p className="text-white/90 text-sm sm:text-base font-medium">per year with Azops</p>
                    
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-foreground text-sm sm:text-base">Monthly Time Saved</span>
                    <span className={`text-lg sm:text-2xl font-bold text-emerald-600 ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                      {allFieldsFilled ? Math.round(monthlyTimeSavedHours) : '---'} <span className="text-sm sm:text-base font-normal">hours</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <span className="text-foreground text-sm sm:text-base">Monthly Money Saved</span>
                    <span className={`text-lg sm:text-2xl font-bold text-emerald-600 ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                      {allFieldsFilled ? `$${Math.round(netSavings / 12).toLocaleString()}` : '$---'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <span className="text-foreground text-sm sm:text-base">Successful Verifications Per Month</span>
                    <span className={`text-lg sm:text-2xl font-bold text-emerald-600 whitespace-nowrap ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                      {allFieldsFilled ? Math.round(annualVerifications / 12).toLocaleString() : '---'} <span className="text-sm sm:text-base font-normal">verifications</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <span className="text-foreground text-sm sm:text-base">Annual Verifications</span>
                    <span className={`text-lg sm:text-2xl font-bold text-emerald-600 whitespace-nowrap ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                      {allFieldsFilled ? Math.round(annualVerifications).toLocaleString() : '---'} <span className="text-sm sm:text-base font-normal">verifications</span>
                    </span>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="border-t border-border pt-4 sm:pt-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Cost Breakdown (Annual)</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground text-sm sm:text-base">Current annual cost</span>
                      <span className={`text-base sm:text-xl font-semibold text-foreground ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                        {allFieldsFilled ? `$${Math.round(currentAnnualCost).toLocaleString()}` : '$---'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground text-sm sm:text-base">Azops annual cost</span>
                      <span className={`text-base sm:text-xl font-semibold text-foreground ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                        {allFieldsFilled ? `$${Math.round(azopsAnnualCost).toLocaleString()}` : '$---'}
                      </span>
                    </div>

                    <div className="h-px bg-border my-3 sm:my-4" />

                    <div className="flex justify-between items-center gap-2">
                      <span className="font-semibold text-foreground text-sm sm:text-base">Net savings</span>
                      <span className={`text-lg sm:text-2xl font-bold text-emerald-600 ${allFieldsFilled && !showResults ? 'blur-2xl select-none' : 'transition-all duration-300'}`}>
                        {allFieldsFilled ? `$${Math.round(netSavings).toLocaleString()}` : '$---'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground text-sm sm:text-base">Verification success rate</span>
                      <span className="text-base sm:text-lg font-semibold text-foreground">95%</span>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground text-sm sm:text-base">Cost per successful verification</span>
                      <span className="text-base sm:text-lg font-semibold text-foreground">$2.00</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 sm:mt-8">
                  <Button size="lg" className="relative overflow-hidden border-2 border-primary text-foreground bg-primary/10 hover:text-primary hover:[text-shadow:0_0_20px_rgba(59,130,246,0.8)] hover:bg-primary/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] shadow-[0_0_30px_rgba(59,130,246,0.3)] font-sf-pro text-base sm:text-lg py-4 sm:py-6 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000" asChild>
                    <a href="/demo">
                      See a Video Demo →
                    </a>
                  </Button>
                  <Button size="lg" className="relative overflow-hidden border-2 border-black text-white bg-black hover:text-gray-300 hover:[text-shadow:0_0_20px_rgba(0,0,0,0.8)] hover:bg-black hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] shadow-[0_0_30px_rgba(0,0,0,0.5)] font-sf-pro text-base sm:text-lg py-4 sm:py-6 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black/60 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000" asChild>
                    <a href="https://calendly.com/sezer123/call" target="_blank" rel="noopener noreferrer">
                      Talk to a Human
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Calculator;