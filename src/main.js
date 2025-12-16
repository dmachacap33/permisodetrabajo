import { permitTemplate, atrTemplate } from './data.js';

const state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  projects: JSON.parse(localStorage.getItem('projects')) || [],
  selectedProjectId: localStorage.getItem('selectedProjectId') || null,
  permits: JSON.parse(localStorage.getItem('permits')) || [],
  expandedPermitId: null
};

const saveState = () => {
  localStorage.setItem('user', JSON.stringify(state.user));
  localStorage.setItem('projects', JSON.stringify(state.projects));
  localStorage.setItem('selectedProjectId', state.selectedProjectId || '');
  localStorage.setItem('permits', JSON.stringify(state.permits));
};

const roles = ['administrador', 'ingeniero', 'elaborador', 'validador', 'aprobador', 'ejecutor'];

const createId = (prefix = 'id') => `${prefix}-${Math.random().toString(36).slice(2, 8)}`;

const buildActivityOptions = () => permitTemplate.categories.map((c) => ({
  key: c.key,
  name: c.name,
  alwaysInclude: c.alwaysInclude
}));

const renderLogin = () => {
  return `
    <div class="card">
      <h1 class="app-title">Ingreso seguro</h1>
      <p>Guarda en Firebase (placeholder) o localStorage con experiencia móvil tipo Duolingo.</p>
      <div class="grid col-2">
        <div>
          <label>Nombre y Apellido</label>
          <input id="inp-name" placeholder="Ada Lovelace" />
        </div>
        <div>
          <label>Email corporativo</label>
          <input id="inp-email" type="email" placeholder="ada@empresa.com" />
        </div>
      </div>
      <div style="margin:12px 0;">
        <label>Rol inicial</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${roles.map((r) => `<div class="pill" data-role="${r}">${r}</div>`).join('')}
        </div>
      </div>
      <button id="btn-login">Entrar</button>
    </div>
  `;
};

const renderProjectCard = (project) => {
  const members = project.team || [];
  const userIsLeader = state.user && ['administrador', 'ingeniero'].includes(state.user.role);
  return `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div class="badge">Código: ${project.code}</div>
          <h3>${project.name}</h3>
          <div>${project.start} → ${project.end}</div>
          <small>${project.segment || 'Segmento transporte'}</small>
        </div>
        <div class="status-label">${project.status || 'En planeación'}</div>
      </div>
      <div class="grid col-2" style="margin-top:12px;">
        <div>
          <strong>Equipo</strong>
          <ul>
            ${members.map((m, idx) => `
              <li>
                <div style="display:flex;align-items:center;gap:6px;">
                  <span>${m.name} —</span>
                  ${userIsLeader ? `<select data-member-role data-proj="${project.id}" data-member="${idx}">
                    ${roles.map((r) => `<option value="${r}" ${m.role === r ? 'selected' : ''}>${r}</option>`).join('')}
                  </select>` : `<span>${m.role}</span>`}
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
        <div>
          <strong>Flujo</strong>
          <div class="timeline">
            ${['Elaboración','Validación','Aprobación','Ejecución'].map((step)=>`<div class="step">${step}</div>`).join('')}
          </div>
        </div>
      </div>
      ${userIsLeader ? `<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
        <button data-action="select-project" data-id="${project.id}">Abrir</button>
        <button data-action="copy-code" data-code="${project.code}">Copiar código</button>
      </div>` : ''}
    </div>
  `;
};

const renderProjectCreator = () => `
  <div class="card">
    <div class="section-title">Crear proyecto (Ingeniero / Administrador)</div>
    <div class="grid col-2">
      <div><label>Nombre</label><input id="proj-name" placeholder="Oleoducto Norte" /></div>
      <div><label>Segmento</label><input id="proj-segment" placeholder="Transporte hidrocarburos" /></div>
      <div><label>Inicio</label><input id="proj-start" type="date" /></div>
      <div><label>Fin</label><input id="proj-end" type="date" /></div>
    </div>
    <button id="btn-create-project" style="margin-top:10px;">Crear y generar código</button>
  </div>
`;

const renderJoinProject = () => `
  <div class="card">
    <div class="section-title">Unirse con código (rol inicial: ejecutor)</div>
    <label>Ingresa código</label>
    <input id="join-code" placeholder="ABC123" />
    <button id="btn-join" style="margin-top:8px;">Unirme</button>
  </div>
`;

const renderChecklist = (selectedKeys, savedChecks = {}) => {
  const selectedCategories = permitTemplate.categories.filter((c) => c.alwaysInclude || selectedKeys.includes(c.key));
  return selectedCategories.map((category) => `
    <div class="card">
      <div class="section-title">${category.name}</div>
      <div class="checklist">
        ${category.items.map((item) => `
          <label class="check-item">
            <input type="checkbox" data-check="${item.id}" ${savedChecks[item.id] ? 'checked' : ''}/> ${item.text}
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
};

const renderPPE = (saved = []) => `
  <div class="card">
    <div class="section-title">EPP requerido</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      ${permitTemplate.ppe.options.map((opt) => `<div class="pill ${saved.includes(opt) ? 'selected' : ''}" data-ppe="${opt}">${opt}</div>`).join('')}
    </div>
    <div style="margin-top:10px;">
      <label>${permitTemplate.ppe.otherLabel}</label>
      <input id="ppe-other" placeholder="Ej: Faja lumbar" value="${(saved.find((s) => !permitTemplate.ppe.options.includes(s)) || '')}" />
    </div>
  </div>
`;

const renderATR = (saved = {}) => `
  <div class="card">
    <div class="section-title">Análisis de Trabajo Seguro (ATR) ${atrTemplate.meta.revision}</div>
    <div class="badge">${atrTemplate.meta.source}</div>
    <div class="atr-board" style="margin-top:12px;">
      ${atrTemplate.talkPoints.map((t) => `
        <div class="atr-column">
          <div class="section-title" style="font-size:15px;">${t.text}</div>
          <textarea data-atr="${t.id}" rows="3" placeholder="Notas dinámicas">${saved[t.id] || ''}</textarea>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:10px;">
      <label>${atrTemplate.hotWorkPrompt}</label>
      <select id="atr-hot">
        <option value="no" ${saved.hot === 'no' ? 'selected' : ''}>No</option>
        <option value="si" ${saved.hot === 'si' ? 'selected' : ''}>Sí</option>
      </select>
    </div>
  </div>
`;

const renderPermitComposer = (project) => {
  const activityOptions = buildActivityOptions();
  return `
    <div class="card">
      <div class="section-title">Nuevo permiso FS0xx R1</div>
      <div class="grid col-2">
        <div>
          <label>Título de actividad</label>
          <input id="perm-title" placeholder="Cambio de válvula" />
        </div>
        <div>
          <label>Fecha</label>
          <input id="perm-date" type="datetime-local" />
        </div>
      </div>
      <div style="margin-top:10px;">
        <label>Selecciona actividades</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${activityOptions.map((opt) => `<div class="pill" data-activity="${opt.key}">${opt.name}${opt.alwaysInclude ? ' (siempre)' : ''}</div>`).join('')}
        </div>
      </div>
      <div id="checklist-area" style="margin-top:12px;">
        ${renderChecklist([])}
      </div>
      ${renderPPE()}
      <div class="card" style="margin-top:12px;">
        <div class="section-title">Evidencias</div>
        <input id="evidence" type="file" multiple accept="image/*" />
        <small>Adjunta fotos de actividad y equipo.</small>
      </div>
      ${renderATR()}
      <button id="btn-save-permit" style="margin-top:12px;">Guardar y enviar a validador</button>
    </div>
  `;
};

const nextStatus = {
  Elaboración: 'Validación',
  Validación: 'Aprobación',
  Aprobación: 'Ejecución'
};

const canAdvance = (permit, role) => {
  if (permit.status === 'Elaboración') return ['elaborador', 'ingeniero', 'administrador'].includes(role);
  if (permit.status === 'Validación') return role === 'validador' || role === 'administrador';
  if (permit.status === 'Aprobación') return role === 'aprobador' || role === 'administrador';
  return false;
};

const renderChecklistSummary = (checks = {}) => {
  return Object.entries(checks).map(([id, value]) => {
    const category = permitTemplate.categories.find((c) => c.items.find((i) => i.id === Number(id)));
    const item = category?.items.find((i) => i.id === Number(id));
    return `<div class="check-item">${item?.text || id}: <strong>${value ? 'Sí' : 'No'}</strong></div>`;
  }).join('');
};

const renderPermitList = (permits) => {
  return `<div class="grid">${permits.map((p) => `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div class="badge">${p.flow}</div>
          <h3>${p.title}</h3>
          <small>${p.date}</small>
        </div>
        <div class="status-label">${p.status}</div>
      </div>
      <div style="margin-top:8px;">Actividades: ${p.activities.join(', ')}</div>
      <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">
        ${['Elaboración','Validación','Aprobación','Ejecución'].map((step) => {
          const active = p.status === step;
          return `<span class="step" style="border-color:${active ? '#fff' : 'rgba(255,255,255,0.3)'}">${step}</span>`;
        }).join('')}
      </div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;">
        <button data-permit-toggle data-id="${p.id}">${state.expandedPermitId === p.id ? 'Ocultar detalle' : 'Ver detalle'}</button>
        ${canAdvance(p, state.user.role) ? `<button data-permit-advance data-id="${p.id}">Avanzar a ${nextStatus[p.status]}</button>` : ''}
      </div>
      ${state.expandedPermitId === p.id ? `
        <div class="card" style="margin-top:12px;background:rgba(255,255,255,0.05);">
          <div class="section-title">Checklist</div>
          ${renderChecklistSummary(p.checks)}
          <div class="section-title" style="margin-top:10px;">EPP</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">${p.ppe.map((item) => `<span class="pill selected">${item}</span>`).join('')}</div>
          <div class="section-title" style="margin-top:10px;">ATR</div>
          <div class="atr-board">${atrTemplate.talkPoints.map((tp) => `<div class="atr-column"><strong>${tp.text}</strong><div>${p.atr[tp.id] || ''}</div></div>`).join('')}</div>
          <div style="margin-top:8px;">¿Trabajo en caliente?: <strong>${p.atr.hot === 'si' ? 'Sí' : 'No'}</strong></div>
          ${p.evidence?.length ? `<div class="section-title" style="margin-top:10px;">Evidencia</div><div style="display:flex;gap:8px;flex-wrap:wrap;">${p.evidence.map((src) => `<img src="${src}" alt="evidencia" style="width:120px;height:90px;object-fit:cover;border-radius:12px;border:1px solid rgba(255,255,255,0.1);" />`).join('')}</div>` : ''}
        </div>
      ` : ''}
    </div>
  `).join('')}</div>`;
};

const attachLoginEvents = () => {
  document.querySelectorAll('[data-role]').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-role]').forEach((p) => p.classList.remove('selected'));
      pill.classList.add('selected');
    });
  });
  document.getElementById('btn-login').addEventListener('click', () => {
    const name = document.getElementById('inp-name').value.trim();
    const email = document.getElementById('inp-email').value.trim();
    const roleEl = document.querySelector('[data-role].selected');
    if (!name || !email || !roleEl) return alert('Completa nombre, email y rol.');
    state.user = { name, email, role: roleEl.dataset.role };
    saveState();
    render();
  });
};

const attachProjectEvents = () => {
  const creatorBtn = document.getElementById('btn-create-project');
  if (creatorBtn) {
    creatorBtn.addEventListener('click', () => {
      const name = document.getElementById('proj-name').value.trim();
      const segment = document.getElementById('proj-segment').value.trim();
      const start = document.getElementById('proj-start').value;
      const end = document.getElementById('proj-end').value;
      if (!name || !start || !end) return alert('Completa nombre e hitos.');
      const project = {
        id: createId('proj'),
        name,
        segment,
        start,
        end,
        code: Math.random().toString(36).slice(2, 7).toUpperCase(),
        team: [state.user],
        status: 'En planeación'
      };
      state.projects.push(project);
      state.selectedProjectId = project.id;
      saveState();
      render();
    });
  }
  const joinBtn = document.getElementById('btn-join');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      const code = document.getElementById('join-code').value.trim().toUpperCase();
      const project = state.projects.find((p) => p.code === code);
      if (!project) return alert('Código inválido');
      if (!project.team.find((m) => m.email === state.user.email)) {
        project.team.push({ ...state.user, role: 'ejecutor' });
      }
      state.selectedProjectId = project.id;
      saveState();
      render();
    });
  }
  document.querySelectorAll('[data-action="select-project"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedProjectId = btn.dataset.id;
      saveState();
      render();
    });
  });
  document.querySelectorAll('[data-action="copy-code"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigator.clipboard?.writeText(btn.dataset.code);
      alert('Código copiado. Compártelo por WhatsApp');
    });
  });
  document.querySelectorAll('[data-member-role]').forEach((select) => {
    select.addEventListener('change', () => {
      const project = state.projects.find((p) => p.id === select.dataset.proj);
      if (!project) return;
      const idx = Number(select.dataset.member);
      if (project.team[idx]) {
        project.team[idx].role = select.value;
        saveState();
      }
    });
  });
};

const attachPermitEvents = (project) => {
  const checklistArea = document.getElementById('checklist-area');
  const pills = document.querySelectorAll('[data-activity]');
  const syncChecklist = () => {
    const selected = Array.from(document.querySelectorAll('[data-activity].selected')).map((p) => p.dataset.activity);
    checklistArea.innerHTML = renderChecklist(selected);
  };
  pills.forEach((pill) => pill.addEventListener('click', () => {
    pill.classList.toggle('selected');
    syncChecklist();
  }));
  document.querySelectorAll('[data-ppe]').forEach((pill) => {
    pill.addEventListener('click', () => pill.classList.toggle('selected'));
  });
  const saveBtn = document.getElementById('btn-save-permit');
  saveBtn?.addEventListener('click', async () => {
    const title = document.getElementById('perm-title').value.trim();
    const date = document.getElementById('perm-date').value;
    const selectedActivities = Array.from(document.querySelectorAll('[data-activity].selected')).map((p) => p.textContent.trim());
    if (!title) return alert('Agrega un título de actividad.');
    const ppeSelected = Array.from(document.querySelectorAll('[data-ppe].selected')).map((p) => p.dataset.ppe);
    const atrNotes = {};
    document.querySelectorAll('[data-atr]').forEach((t) => atrNotes[t.dataset.atr] = t.value);
    atrNotes.hot = document.getElementById('atr-hot').value;

    const checks = {};
    document.querySelectorAll('[data-check]').forEach((c) => checks[c.dataset.check] = c.checked);

    const files = Array.from(document.getElementById('evidence').files || []);
    const evidence = await Promise.all(files.map((file) => new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    })));

    const permit = {
      id: createId('perm'),
      projectId: project.id,
      title,
      date,
      activities: selectedActivities.length ? selectedActivities : ['Generales'],
      ppe: [...ppeSelected, document.getElementById('ppe-other').value].filter(Boolean),
      atr: atrNotes,
      checks,
      evidence,
      status: 'Elaboración',
      flow: 'FS0xx R1'
    };
    state.permits.push(permit);
    saveState();
    alert('Enviado al validador.');
    render();
  });
};

const renderDashboard = () => {
  const project = state.projects.find((p) => p.id === state.selectedProjectId);
  const leader = ['administrador','ingeniero'].includes(state.user.role);
  return `
    <header>
      <div>
        <div class="app-title">Permisos de Trabajo</div>
        <div class="badge">Rol: ${state.user.role}</div>
      </div>
      <button id="btn-logout">Cerrar sesión</button>
    </header>
    <div class="grid">
      ${leader ? renderProjectCreator() : ''}
      ${renderJoinProject()}
      <div class="grid col-2">${state.projects.map(renderProjectCard).join('')}</div>
      ${project ? renderPermitComposer(project) : ''}
      <div class="card">
        <div class="section-title">Permisos en curso</div>
        ${renderPermitList(state.permits.filter((p) => !project || p.projectId === project.id))}
      </div>
    </div>
  `;
};

const attachDashboardEvents = () => {
  document.getElementById('btn-logout').addEventListener('click', () => {
    state.user = null;
    state.expandedPermitId = null;
    saveState();
    render();
  });
  attachProjectEvents();
  const project = state.projects.find((p) => p.id === state.selectedProjectId);
  if (project) attachPermitEvents(project);
  document.querySelectorAll('[data-permit-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.expandedPermitId = state.expandedPermitId === btn.dataset.id ? null : btn.dataset.id;
      render();
    });
  });
  document.querySelectorAll('[data-permit-advance]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const permit = state.permits.find((p) => p.id === btn.dataset.id);
      if (!permit) return;
      if (!canAdvance(permit, state.user.role)) return alert('No tienes permiso para avanzar este flujo.');
      permit.status = nextStatus[permit.status] || permit.status;
      saveState();
      render();
    });
  });
};

const render = () => {
  const root = document.getElementById('app');
  if (!state.user) {
    root.innerHTML = renderLogin();
    attachLoginEvents();
  } else {
    root.innerHTML = renderDashboard();
    attachDashboardEvents();
  }
};

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
  render();
});

// Firebase placeholder (user must replace with real config)
export const bootstrapFirebase = (config) => {
  console.info('Conecta tu Firebase aquí', config);
};
