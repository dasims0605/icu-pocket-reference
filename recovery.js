/* Displays a usable lightweight reference only if the primary app could not start. */
(() => {
  const app = document.querySelector('#app');
  if (!app || app.children.length) return;
  const meds = ['Norepinephrine','Vasopressin','Epinephrine','Phenylephrine','Dobutamine','Amiodarone','Diltiazem','Propofol','Dexmedetomidine','Fentanyl','Midazolam','Ketamine','Heparin','Insulin','Sodium bicarbonate'];
  const conditions = ['Septic shock','Cardiogenic shock','Hypovolemic shock','Obstructive shock','ARDS','COPD exacerbation','Pulmonary edema','Pulmonary embolism','Acute kidney injury','DKA / HHS','GI bleeding','DIC','Status epilepticus','Increased ICP','Post-cardiac arrest syndrome'];
  const quick = ['MAP <65 / refractory hypotension','Severe metabolic acidosis','Refractory hypoxemia','Post-ROSC','Sudden ventilator deterioration'];
  const list = (title, items) => `<h2>${title}</h2><div class="list">${items.map(x => `<div class="item"><span class="tag">General education</span><h3>${x}</h3><small>Use current orders, workplace policies, and pharmacy guidance for patient-specific care.</small></div>`).join('')}</div>`;
  app.innerHTML = `<header class="top"><div class="brand"><div class="mark">+</div><div><div class="eyebrow">Personal bedside brain</div><div class="title">ICU Pocket Reference</div></div></div></header><div class="disclaimer"><strong>General education only.</strong> Use current orders, institution policies, pharmacy guidance, and clinical judgment.</div><div class="section warn"><h3>Simple display mode</h3><p>The primary app did not finish loading, so this lightweight reference is being shown. The core content remains available while the full interface is updated.</p></div>${list('Problem guides',quick)}${list('Medications',meds)}${list('Conditions',conditions)}<div class="section"><h3>Calculators</h3><p>MAP: (SBP + 2 × DBP) ÷ 3 · Anion gap: Na − (Cl + HCO3) · P/F ratio: PaO2 ÷ FiO2.</p></div>`;
})();
