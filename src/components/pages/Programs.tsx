import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function Programs() {
  const { lang, t } = useTranslation();
  const [programAccordionOpen, setProgramAccordionOpen] = useState<string | null>('ev-tech');

  return (
    <motion.div
      key="programs"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="py-16 bg-white text-slate-800 text-start"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-12 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
            <Layers size={13} className="text-brand-blue" />
            <span>{t('certifiedDiploma')}</span>
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
            {lang === 'en' ? 'Diplomas & Technical Curriculums' : 'الدبلومات والبرامج الفنية المعتمدة'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
            {lang === 'en'
              ? 'Detailed modular syllabuses mapping out core diagnostics competencies, contact hours, and practical work ratios.'
              : 'مخططات برامجنا الدراسية المفصلة وجدول الساعات الأكاديمية والمهارات المقسمة حسب معايير التدريب المهني.'}
          </p>
        </div>

        {/* Rigid Tabular Accordion */}
        <div className="space-y-6">
          {/* EV Tech Diploma */}
          <div className="border border-slate-200" id="ev-tech">
            <button
              onClick={() => setProgramAccordionOpen(programAccordionOpen === 'ev-tech' ? null : 'ev-tech')}
              className="w-full bg-slate-50 p-6 flex justify-between items-center cursor-pointer border-none font-sans text-start"
            >
              <div>
                <h4 className="text-lg font-black text-slate-900">{t('evTechDiploma')}</h4>
                <span className="text-xs text-brand-blue font-mono font-bold mt-1 block">360 CONTACT HOURS | 80/20 PRACTICAL-TO-THEORETICAL RATIO</span>
              </div>
              <span className="text-slate-450 font-bold">{programAccordionOpen === 'ev-tech' ? '▲' : '▼'}</span>
            </button>
            {programAccordionOpen === 'ev-tech' && (
              <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-start font-sans">
                  <thead>
                    <tr className="bg-brand-blue text-white text-start">
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Stage / Module' : 'المرحلة / المساق'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Syllabus & Competency Guidelines' : 'مخطط المنهج والمهارات المكتسبة'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Practical Hours' : 'ساعات العملي'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Theoretical Hours' : 'ساعات النظري'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 1</td>
                      <td className="border border-slate-200 p-3">High-Voltage Net Loop, MSD Interlocks & Protective insulated gear safety drills.</td>
                      <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 2</td>
                      <td className="border border-slate-200 p-3">Three-Phase AC Traction Motors, Resolver Timing, Regenerative Braking calibrations.</td>
                      <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 3</td>
                      <td className="border border-slate-200 p-3">EV Inverters & DC-DC Converters Thermal management & Coolant loop troubleshooting.</td>
                      <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 4</td>
                      <td className="border border-slate-200 p-3">Structural battery architectures (Tesla, BYD cells) & Safe dismantling trade exam.</td>
                      <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Hybrid Systems Diploma */}
          <div className="border border-slate-200" id="hybrid-sys">
            <button
              onClick={() => setProgramAccordionOpen(programAccordionOpen === 'hybrid-sys' ? null : 'hybrid-sys')}
              className="w-full bg-slate-50 p-6 flex justify-between items-center cursor-pointer border-none font-sans text-start"
            >
              <div>
                <h4 className="text-lg font-black text-slate-900">{t('hybridDiploma')}</h4>
                <span className="text-xs text-brand-blue font-mono font-bold mt-1 block">240 CONTACT HOURS | 80/20 PRACTICAL-TO-THEORETICAL RATIO</span>
              </div>
              <span className="text-slate-450 font-bold">{programAccordionOpen === 'hybrid-sys' ? '▲' : '▼'}</span>
            </button>
            {programAccordionOpen === 'hybrid-sys' && (
              <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-start font-sans">
                  <thead>
                    <tr className="bg-brand-blue text-white text-start">
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Stage / Module' : 'المرحلة / المساق'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Syllabus & Competency Guidelines' : 'مخطط المنهج والمهارات المكتسبة'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Practical Hours' : 'ساعات العملي'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Theoretical Hours' : 'ساعات النظري'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 1</td>
                      <td className="border border-slate-200 p-3">Toyota Synergistic Drive (THS) & Hyundai Dual-Motor Transmission Architectures.</td>
                      <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 2</td>
                      <td className="border border-slate-200 p-3">NiMH & Lithium-Ion battery pack inspections, Cell balancing & internal resistance scans.</td>
                      <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 3</td>
                      <td className="border border-slate-200 p-3">DC-DC Step-Down Converters, High voltage cabin heating lines & A/C compressor diagnosis.</td>
                      <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 4</td>
                      <td className="border border-slate-200 p-3">Live drivetrain diagnostic check speed runs, trouble code (DTC) reading & data calibration.</td>
                      <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Electronic Diagnostics Course */}
          <div className="border border-slate-200" id="elec-diag">
            <button
              onClick={() => setProgramAccordionOpen(programAccordionOpen === 'elec-diag' ? null : 'elec-diag')}
              className="w-full bg-slate-50 p-6 flex justify-between items-center cursor-pointer border-none font-sans text-start"
            >
              <div>
                <h4 className="text-lg font-black text-slate-900">{t('diagnosticsCourse')}</h4>
                <span className="text-xs text-brand-blue font-mono font-bold mt-1 block">120 CONTACT HOURS | 80/20 PRACTICAL-TO-THEORETICAL RATIO</span>
              </div>
              <span className="text-slate-450 font-bold">{programAccordionOpen === 'elec-diag' ? '▲' : '▼'}</span>
            </button>
            {programAccordionOpen === 'elec-diag' && (
              <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-start font-sans">
                  <thead>
                    <tr className="bg-brand-blue text-white text-start">
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Stage / Module' : 'المرحلة / المساق'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Syllabus & Competency Guidelines' : 'مخطط المنهج والمهارات المكتسبة'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Practical Hours' : 'ساعات العملي'}</th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Theoretical Hours' : 'ساعات النظري'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 1</td>
                      <td className="border border-slate-200 p-3">OBD-II standard codes, scan-tool parameter data, fuel trim and diagnostic fault codes.</td>
                      <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 2</td>
                      <td className="border border-slate-200 p-3">Sensors, Actuators & ECU micro-controller calibrations (throttle bodies, air flow).</td>
                      <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 3</td>
                      <td className="border border-slate-200 p-3">Controller Area Network (CAN) bus circuit analysis, signal wire faults and gateway debugging.</td>
                      <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">Stage 4</td>
                      <td className="border border-slate-200 p-3">Electronic Module Scanning & Oscilloscope wave capture for sensor signal tracking.</td>
                      <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                      <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
