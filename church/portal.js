/* Arcs for Churches · beta portal. Talks to the same Supabase project as the app. */
const BRAND='Arcs';
const SB={url:'https://gbucruwumfaaazjnovdm.supabase.co',key:'sb_publishable_zgx4x5D2EBKdthG7VMjKZQ_34CwxS4z'};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ls={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{v?localStorage.setItem(k,v):localStorage.removeItem(k)}catch(e){}}};

/* ---------- language of the portal itself ---------- */
let UI=ls.get('portalLang')||((navigator.language||'en').startsWith('de')?'de':'en');
const T={
 en:{tag:'for Churches',beta:'Beta',signTitle:'Sign in to manage your church',signSub:'We’ll email you a 6-digit code. No password.',email:'Email address',sendCode:'Send code',codeTitle:'Enter the code',codeSub:e=>`We sent it to ${e}.`,verify:'Sign in',back:'Back',badCode:'That code didn’t work.',wait:'Too many tries. Please wait a minute.',offline:'No connection.',err:'Something went wrong. Please try again.',
  signOut:'Sign out',regTitle:'Register your church',regSub:'Your church appears in the app as soon as you publish your first service.',chName:'Church name',chShort:'Short name (shown in the app’s tab bar)',chCity:'City, State',chCode:'Church code (members can type it to find you)',create:'Create church',taken:'This code or church already exists.',
  services:'Services',newSvc:'New service',drafts:'Drafts',draft:'Draft',published:'Published',none:'No services yet. Create your first one.',openApp:'Open in app',shareLink:'Copy link for members',copied:'Link copied',
  date:'Date',lang:'Language of this service',series:'Series',part:'Part',title:'Title',by:'Speaker',blocks:'Content',add:'Add',
  bVerse:'Sermon text / key verse',bText:'Text section',bPoint:'Point',bList:'Questions / list',bRefs:'More passages',bSteps:'Next steps',
  passage:'Passage',passages:'Passages (separate with ;)',passPh:'e.g. John 15:18–16:4',heading:'Heading',hNone:'No heading',hIntro:'Introduction',hCore:'Key message',hGospel:'The gospel',hQuestions:'For discussion',hPrayer:'Prayer focus',hNext:'Next steps',hCustom:'Custom heading…',
  role:'Shown as',kSermon:'Sermon text',kKey:'Key verse',kPlain:'Passage',text:'Text',ptTitle:'Point title',takeaways:'Key sentences (one per line)',items:'Items (one per line)',after:'Text after the list',
  save:'Save draft',publish:'Publish',unpublish:'Unpublish',del:'Delete',delSure:'Click again to delete',saved:'Saved',pubOk:'Published. It’s live in the app.',
  detect:'Find Bible references in text',detectSub:'Paste a handout, sermon notes or a transcript. We’ll find every Bible reference in it.',detectGo:'Only find references',fileBtn:'Choose a PDF or Word file',aiBtn:'Build the whole service from it',trBtn:'Translate',trTitle:'Translate into more languages',trSub:s=>`This service is written in ${s}. In which languages should members be able to read it?`,trHas:'already translated',trGo:'Translate',trWait:'Translating … this takes about half a minute.',trOk:'Translated. Members now see it in their language.',trNone:'Pick at least one language.',trEmpty:'There is no text to translate yet.',aiWait:'Reading the handout: title, points, questions and passages. This takes about half a minute …',aiOk:'Done. Please check everything before you publish.',aiNoKey:'The AI import is not switched on yet (API key missing).',aiFail:'The AI import did not work. Try again or fill it in by hand.',aiReplace:'Replace what is in the editor now?',aiShort:'Choose a file or paste the text first.',upBtn:'Upload handout (PDF or Word)',upSub:'Tap to choose a file or drop it here. We turn it into the service: title, points, questions and passages.',fileSub:'or drop it here. It is read on your computer, nothing is uploaded.',pastePh:'…or paste text here',reading:n=>`Reading ${n} …`,readOk:n=>`Read ${n}.`,readFail:'This file could not be read. Try copying the text instead.',detectAdd:'Add as “More passages”',detectMain:'Use first as sermon text',found:n=>`${n} references found`,
  preview:'Preview',transNote:'Translations into the other app languages are created automatically when you publish (coming soon in the beta).',unknown:'Unknown reference',up:'Move up',down:'Move down',remove:'Remove',cancel:'Cancel'},
 de:{tag:'für Gemeinden',beta:'Beta',signTitle:'Anmelden, um deine Gemeinde zu verwalten',signSub:'Wir schicken dir einen 6-stelligen Code. Kein Passwort.',email:'E-Mail-Adresse',sendCode:'Code senden',codeTitle:'Code eingeben',codeSub:e=>`Wir haben ihn an ${e} geschickt.`,verify:'Anmelden',back:'Zurück',badCode:'Der Code stimmt nicht.',wait:'Zu viele Versuche. Bitte warte eine Minute.',offline:'Keine Verbindung.',err:'Etwas ist schiefgelaufen. Bitte versuch es noch einmal.',
  signOut:'Abmelden',regTitle:'Gemeinde registrieren',regSub:'Deine Gemeinde erscheint in der App, sobald du den ersten Gottesdienst veröffentlichst.',chName:'Name der Gemeinde',chShort:'Kurzname (erscheint unten in der App)',chCity:'Stadt, Bundesstaat',chCode:'Gemeinde-Code (damit Mitglieder euch finden)',create:'Gemeinde anlegen',taken:'Diesen Code oder diese Gemeinde gibt es schon.',
  services:'Gottesdienste',newSvc:'Neuer Gottesdienst',drafts:'Entwürfe',draft:'Entwurf',published:'Veröffentlicht',none:'Noch keine Gottesdienste. Leg den ersten an.',openApp:'In der App öffnen',shareLink:'Link für Mitglieder kopieren',copied:'Link kopiert',
  date:'Datum',lang:'Sprache dieses Gottesdienstes',series:'Reihe',part:'Teil',title:'Titel',by:'Prediger',blocks:'Inhalt',add:'Hinzufügen',
  bVerse:'Predigttext / Leitvers',bText:'Textabschnitt',bPoint:'Punkt',bList:'Fragen / Liste',bRefs:'Weitere Bibelstellen',bSteps:'Nächste Schritte',
  passage:'Bibelstelle',passages:'Bibelstellen (mit ; trennen)',passPh:'z. B. Joh 15,18–16,4',heading:'Überschrift',hNone:'Keine Überschrift',hIntro:'Einführung',hCore:'Kernbotschaft',hGospel:'Evangelium',hQuestions:'Zum Gespräch',hPrayer:'Gebetsfokus',hNext:'Nächste Schritte',hCustom:'Eigene Überschrift …',
  role:'Anzeigen als',kSermon:'Predigttext',kKey:'Leitvers',kPlain:'Bibelstelle',text:'Text',ptTitle:'Überschrift des Punkts',takeaways:'Kernsätze (einer pro Zeile)',items:'Einträge (einer pro Zeile)',after:'Text nach der Liste',
  save:'Entwurf speichern',publish:'Veröffentlichen',unpublish:'Zurückziehen',del:'Löschen',delSure:'Nochmal klicken zum Löschen',saved:'Gespeichert',pubOk:'Veröffentlicht. Jetzt live in der App.',
  detect:'Bibelstellen im Text finden',detectSub:'Füge ein Handout, Predigtnotizen oder ein Transkript ein. Wir finden alle Bibelstellen darin.',detectGo:'Nur Bibelstellen finden',fileBtn:'PDF oder Word-Datei auswählen',aiBtn:'Ganzen Gottesdienst daraus erstellen',trBtn:'Übersetzen',trTitle:'In weitere Sprachen übersetzen',trSub:s=>`Dieser Gottesdienst ist auf ${s} geschrieben. In welchen Sprachen sollen ihn Mitglieder lesen können?`,trHas:'schon übersetzt',trGo:'Übersetzen',trWait:'Wird übersetzt … das dauert etwa eine halbe Minute.',trOk:'Übersetzt. Mitglieder sehen ihn jetzt in ihrer Sprache.',trNone:'Wähl mindestens eine Sprache.',trEmpty:'Es gibt noch keinen Text zum Übersetzen.',aiWait:'Das Handout wird gelesen: Titel, Punkte, Fragen und Bibelstellen. Das dauert etwa eine halbe Minute …',aiOk:'Fertig. Bitte alles prüfen, bevor du veröffentlichst.',aiNoKey:'Der KI-Import ist noch nicht eingeschaltet (API-Schlüssel fehlt).',aiFail:'Der KI-Import hat nicht geklappt. Versuch es noch mal oder füll es von Hand aus.',aiReplace:'Den jetzigen Inhalt im Editor ersetzen?',aiShort:'Wähl zuerst eine Datei oder füg den Text ein.',upBtn:'Handout hochladen (PDF oder Word)',upSub:'Tippen und Datei auswählen oder hierher ziehen. Daraus wird der Gottesdienst: Titel, Punkte, Fragen und Bibelstellen.',fileSub:'oder hierher ziehen. Sie wird auf deinem Computer gelesen, nichts wird hochgeladen.',pastePh:'… oder Text hier einfügen',reading:n=>`${n} wird gelesen …`,readOk:n=>`${n} gelesen.`,readFail:'Diese Datei ließ sich nicht lesen. Kopier den Text stattdessen hinein.',detectAdd:'Als „Weitere Bibelstellen“ hinzufügen',detectMain:'Erste als Predigttext nehmen',found:n=>`${n} Bibelstellen gefunden`,
  preview:'Vorschau',transNote:'Die Übersetzungen in die anderen App-Sprachen entstehen beim Veröffentlichen automatisch (kommt in der Beta bald).',unknown:'Unbekannte Bibelstelle',up:'Nach oben',down:'Nach unten',remove:'Entfernen',cancel:'Abbrechen'}};
const t=(k,...a)=>{const v=(T[UI]||T.en)[k]??T.en[k]??k;return typeof v==='function'?v(...a):v};
const LANGS={en:'English',de:'Deutsch',es:'Español',fr:'Français',pt:'Português',it:'Italiano'};

/* ---------- Bible references ---------- */
let META=null;const BIBLE={};
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\./g,' ').replace(/\s+/g,' ').trim();
let NAMEIDX=null;
function buildNames(){const m=new Map();const add=(nm,i)=>{const k=norm(nm).replace(/^(\d)\s*/,'$1 ');if(k&&!m.has(k))m.set(k,i)};
  META.books.forEach((b,i)=>{add(b.n,i);add(b.a,i)});DEN.forEach((n,i)=>add(n,i));DEA.forEach((n,i)=>add(n,i));for(const k in DE)add(k,DE[k]);
  for(const L in NAMES){NAMES[L].forEach((n,i)=>add(n,i));ABBR[L].forEach((n,i)=>add(n,i))}
  [['psalms',18],['song of songs',21],['revelations',65],['jn',42],['mt',39],['mk',40],['lk',41],['rom',44],['phil',49],['jas',58],['1 cor',45],['2 cor',46],['1 thes',51],['2 thes',52],['heb',57]].forEach(([k,i])=>add(k,i));
  NAMEIDX=[...m.entries()].sort((a,b)=>b[0].length-a[0].length)}
const bookName=(i,L)=>L==='de'?DEN[i]:NAMES[L]?NAMES[L][i]:META.books[i].n;
function findBook(name){const n=norm(name).replace(/^(\d)\s*/,'$1 ');const hit=NAMEIDX.find(([k])=>k===n);if(hit)return hit[1];
  if(n.length>=3){const p=NAMEIDX.find(([k])=>k.startsWith(n));if(p)return p[1]}return -1}
const vcount=(b,c)=>META.books[b].c[c-1]||0;
/* "John 15:18-16:4", "Joh 15,18–16,4", "Rom 8:18, 22-23" → [book, chapter, verse, toVerse, toChapter] */
function parseRef(q){q=String(q||'').replace(/[–—]/g,'-').trim();if(!q)return null;
  const m=q.match(/^(.+?)\s*(\d+)\s*(?:[:,.]\s*(\d+)(?:\s*-\s*(\d+)(?:\s*[:,.]\s*(\d+))?)?)?/);if(!m)return null;
  const b=findBook(m[1]);if(b<0)return null;const c=+m[2];if(c<1||c>META.books[b].c.length)return null;
  if(!m[3]){return [b,c,1,vcount(b,c)]}
  const v=+m[3];if(v<1||v>vcount(b,c))return null;
  if(!m[4])return [b,c,v];
  if(m[5]){const c2=+m[4],v2=+m[5];if(c2<=c||c2>META.books[b].c.length||v2>vcount(b,c2))return [b,c,v];return [b,c,v,v2,c2]}
  const v2=Math.min(+m[4],vcount(b,c));return v2>v?[b,c,v,v2]:[b,c,v]}
const sepOf=L=>L==='de'||L==='it'?',':':';
function refLabel(r,L){if(!r)return '';const [b,c,v,v2,c2]=r,s=sepOf(L);return `${bookName(b,L)} ${c}${s}${v}`+(c2?`–${c2}${s}${v2}`:v2?`–${v2}`:'')}
function refText(r,L){const B=BIBLE[L];if(!B||!r)return '';const [b,c,v,v2,c2]=r;const out=[];
  if(c2){for(let ch=c;ch<=c2;ch++){const vs=B[b][ch-1]||[];const a=ch===c?v:1,z=ch===c2?v2:vs.length;for(let k=a;k<=z;k++)out.push(vs[k-1])}}
  else{const vs=B[b][c-1]||[];for(let k=v;k<=(v2||v);k++)out.push(vs[k-1])}
  return out.filter(Boolean).join(' ')}
async function loadBible(L){if(BIBLE[L])return;try{BIBLE[L]=await (await fetch(`../bible_${L}.json`)).json()}catch(e){}}
/* every reference in free text, in order */
function findRefs(text){const names=NAMEIDX.map(([k])=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/^(\d) /,'$1\\.?\\s*').replace(/ /g,'\\s+')).join('|');
  const re=new RegExp(`(?:^|[^\\p{L}\\d])((?:${names})\\.?\\s*\\d+\\s*[:,.]\\s*\\d+(?:\\s*[-–—]\\s*\\d+(?:\\s*[:,.]\\s*\\d+)?)?)`,'giu');
  const out=[],seen=new Set();let m;
  const src=text.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  while((m=re.exec(src))){const mm=m[1].match(/^(.*\D)\s*\d+\s*([:,.])\s*\d/);if(mm&&mm[2]==='.'&&mm[1].replace(/[.\s\d]/g,'').length<=3)continue;/* "am 1.11." is a date, not Amos */const r=parseRef(m[1]);if(r){const k=r.join();if(!seen.has(k)){seen.add(k);out.push(r)}}}
  return out}

/* ---------- Supabase ---------- */
let sess=null;try{sess=JSON.parse(ls.get('portalSession')||'null')}catch(e){}
function keep(d){sess={at:d.access_token,rt:d.refresh_token,exp:d.expires_at||Math.floor(Date.now()/1000)+(d.expires_in||3600),email:(d.user&&d.user.email)||(sess&&sess.email)};ls.set('portalSession',JSON.stringify(sess))}
async function token(){if(!sess)return null;if(sess.exp-90>Date.now()/1000)return sess.at;
  try{keep(await api('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:JSON.stringify({refresh_token:sess.rt})},false));return sess.at}
  catch(e){if(e.status>=400&&e.status<500){sess=null;ls.set('portalSession','');render()}return null}}
async function api(path,opt={},auth=true){const h={apikey:SB.key,'Content-Type':'application/json',...(opt.headers||{})};
  if(auth){const at=await token();if(!at){const e=new Error('auth');e.status=401;throw e}h.Authorization='Bearer '+at}
  let r;try{r=await fetch(SB.url+path,{...opt,headers:h})}catch(e){const x=new Error('offline');x.offline=true;throw x}
  const tx=await r.text();let d=null;try{d=tx?JSON.parse(tx):null}catch(e){}
  if(!r.ok){const e=new Error(d&&(d.msg||d.message)||('http '+r.status));e.status=r.status;e.code=d&&(d.code||d.error_code);throw e}return d}
const errMsg=e=>t(e&&e.status===429?'wait':e&&e.offline?'offline':'err');

/* ---------- state ---------- */
let churches=[],church=null,services=[],cur=null,dirty=false,authEmail='',authStep='email';
function toast(msg){const el=$('#toast');el.textContent=msg;el.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>el.hidden=true,2600)}

/* ---------- screens ---------- */
function render(){$('#langBtn').textContent=UI==='de'?'EN':'DE';$$('[data-t]').forEach(el=>el.textContent=t(el.dataset.t));
  $('#who').textContent=sess?sess.email||'':'';$('#signOut').hidden=!sess;
  if(!sess)return showAuth();if(!churches.length)return showRegister();showMain()}
function show(id){['#auth','#register','#main'].forEach(s=>$(s).hidden=s!==id)}
function showAuth(){show('#auth');const b=$('#authBox');
  if(authStep==='email'){b.innerHTML=`<h1>${t('signTitle')}</h1><p class="sub">${t('signSub')}</p>
    <label>${t('email')}<input id="aEmail" type="email" autocomplete="email" value="${esc(authEmail)}"></label><p class="err" id="aErr" hidden></p>
    <button class="btn gold" id="aSend">${t('sendCode')}</button>`;
    $('#aEmail').focus();$('#aEmail').onkeydown=e=>{if(e.key==='Enter')$('#aSend').click()};
    $('#aSend').onclick=async()=>{const v=$('#aEmail').value.trim();if(!/^\S+@\S+\.\S+$/.test(v))return;const btn=$('#aSend');btn.disabled=true;
      try{await api('/auth/v1/otp',{method:'POST',body:JSON.stringify({email:v,create_user:true,data:{lang:UI}})},false);authEmail=v;authStep='code';showAuth()}
      catch(e){$('#aErr').textContent=errMsg(e);$('#aErr').hidden=false;btn.disabled=false}}}
  else{b.innerHTML=`<h1>${t('codeTitle')}</h1><p class="sub">${esc(t('codeSub',authEmail))}</p>
    <input id="aCode" class="code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="••••••"><p class="err" id="aErr" hidden></p>
    <button class="btn gold" id="aVerify">${t('verify')}</button><button class="btn ghost" id="aBack">${t('back')}</button>`;
    const inp=$('#aCode');inp.focus();inp.oninput=()=>{inp.value=inp.value.replace(/\D/g,'').slice(0,6);if(inp.value.length===6)$('#aVerify').click()};
    $('#aBack').onclick=()=>{authStep='email';showAuth()};
    $('#aVerify').onclick=async()=>{const code=inp.value;if(code.length!==6)return;
      try{keep(await api('/auth/v1/verify',{method:'POST',body:JSON.stringify({type:'email',email:authEmail,token:code})},false));sess.email=authEmail;ls.set('portalSession',JSON.stringify(sess));authStep='email';await loadChurches();render()}
      catch(e){$('#aErr').textContent=e.status===429?t('wait'):e.offline?t('offline'):t('badCode');$('#aErr').hidden=false;inp.select()}}}}
function slug(s){return norm(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)}
function showRegister(){show('#register');const b=$('#regBox');
  b.innerHTML=`<h1>${t('regTitle')}</h1><p class="sub">${t('regSub')}</p>
   <label>${t('chName')}<input id="rName"></label><label>${t('chShort')}<input id="rShort" maxlength="12"></label>
   <label>${t('chCity')}<input id="rCity" placeholder="Aurora, IL"></label><label>${t('chCode')}<input id="rCode" maxlength="16" style="text-transform:uppercase"></label>
   <p class="err" id="rErr" hidden></p><button class="btn gold" id="rGo">${t('create')}</button>`;
  $('#rName').oninput=()=>{const n=$('#rName').value;if(!$('#rShort').dataset.touched)$('#rShort').value=n.split(/\s+/)[0]||'';if(!$('#rCode').dataset.touched)$('#rCode').value=(n.split(/\s+/)[0]||'').toUpperCase().replace(/[^A-Z0-9]/g,'')};
  $('#rShort').oninput=e=>e.target.dataset.touched=1;$('#rCode').oninput=e=>e.target.dataset.touched=1;
  $('#rGo').onclick=async()=>{const name=$('#rName').value.trim(),city=$('#rCity').value.trim();if(!name||!city)return;
    const row={id:slug(name+' '+city.split(',')[0]),name,short:$('#rShort').value.trim()||name,city,code:$('#rCode').value.trim().toUpperCase()||null};
    try{await api('/rest/v1/churches',{method:'POST',headers:{Prefer:'return=minimal'},body:JSON.stringify(row)});await loadChurches();church=churches.find(c=>c.id===row.id)||churches[0];await loadServices();render()}
    catch(e){$('#rErr').textContent=e.code==='23505'?t('taken'):errMsg(e);$('#rErr').hidden=false}}}
async function loadChurches(){const rows=await api('/rest/v1/church_admins?select=church_id,churches(id,name,short,city,code)');
  churches=(rows||[]).map(r=>r.churches).filter(Boolean).sort((a,b)=>a.name.localeCompare(b.name));
  const keepId=ls.get('portalChurch');church=churches.find(c=>c.id===keepId)||churches[0]||null}
async function loadServices(){if(!church){services=[];return}
  services=await api(`/rest/v1/services?select=id,church_id,date,src,status,data,updated_at&church_id=eq.${encodeURIComponent(church.id)}&order=date.desc`)||[]}

function appLink(svc){const u=new URL('../',location.href);u.searchParams.set('church',church.id);if(svc)u.searchParams.set('service',svc.id);return u.href}
function showMain(){show('#main');
  $('#churchSel').innerHTML=churches.map(c=>`<option value="${esc(c.id)}"${church&&c.id===church.id?' selected':''}>${esc(c.name)} · ${esc(c.city||'')}</option>`).join('');
  $('#churchSel').onchange=async e=>{if(dirty&&!confirm('Discard changes?'))return e.target.value=church.id;church=churches.find(c=>c.id===e.target.value);ls.set('portalChurch',church.id);cur=null;await loadServices();showMain()};
  const pub=services.filter(s=>s.status==='published'),dr=services.filter(s=>s.status!=='published');
  const item=s=>`<button class="sitem${cur&&cur.id===s.id?' on':''}" data-id="${esc(s.id)}"><b>${esc(tx(s.data.title,s.src)||'—')}</b><small>${esc(fmtDate(s.date))}${s.data.series?' · '+esc(tx(s.data.series,s.src)):''}</small></button>`;
  $('#slist').innerHTML=(services.length?'':`<p class="hint">${t('none')}</p>`)+(dr.length?`<h4>${t('drafts')}</h4>`+dr.map(item).join(''):'')+(pub.length?`<h4>${t('published')}</h4>`+pub.map(item).join(''):'');
  $$('#slist .sitem').forEach(b=>b.onclick=()=>{if(dirty&&!confirm('Discard changes?'))return;openSvc(services.find(s=>s.id===b.dataset.id))});
  $('#newSvc').onclick=()=>{if(dirty&&!confirm('Discard changes?'))return;newSvc()};
  $('#openApp').href=appLink(null);
  $('#copyLink').onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(appLink(cur&&cur.status==='published'?cur:null));toast(t('copied'))};
  if(cur)renderEditor();else $('#editor').innerHTML=`<div class="empty"><p>${t('none')}</p><button class="btn gold" onclick="document.querySelector('#newSvc').click()">${t('newSvc')}</button></div>`;}
const fmtDate=d=>{try{return new Date(d+'T12:00:00').toLocaleDateString(UI==='de'?'de-DE':'en-US',{weekday:'short',day:'numeric',month:'short',year:'numeric'})}catch(e){return d}};
const tx=(o,src)=>o?(typeof o==='string'?o:o[src]||o.en||o.de||Object.values(o)[0]||''):'';
const setTx=(src,v)=>v?{[src]:v}:null;   // editing the original drops outdated translations
function nextSunday(){const d=new Date();d.setDate(d.getDate()+((7-d.getDay())%7));return d.toISOString().slice(0,10)}
function newSvc(){const src=UI==='de'?'de':'en';cur={id:null,church_id:church.id,date:nextSunday(),src,status:'draft',data:{title:null,series:null,part:null,by:null,blocks:[{k:'verse',ref:null,key:2},{k:'text',h:'svcIntro',x:null},{k:'point',n:1,h:null,x:null,ref:null,take:[]},{k:'list',h:'svcQuestions',items:[]}]}};dirty=true;showMain()}
function openSvc(s){cur=JSON.parse(JSON.stringify(s));dirty=false;showMain()}

/* ---------- editor ---------- */
const HEAD=[['',t('hNone')],['svcIntro','hIntro'],['svcCore','hCore'],['svcGospel','hGospel'],['svcQuestions','hQuestions'],['svcPrayer','hPrayer'],['svcNext','hNext']];
const blockName={verse:'bVerse',text:'bText',point:'bPoint',list:'bList',refs:'bRefs',steps:'bSteps'};
function refInput(val,id,multi){const txt=multi?(val||[]).map(r=>refLabel(r,cur.src)).join('; '):refLabel(val,cur.src);
  return `<input class="ref" data-ref="${id}" data-multi="${multi?1:0}" value="${esc(txt)}" placeholder="${t('passPh')}"><div class="refchips" data-chips="${id}"></div>`}
function headSelect(bl,i){const custom=!bl.h&&bl.title;const opts=HEAD.map(([v,k])=>`<option value="${v}"${(bl.h||'')===v&&!custom?' selected':''}>${v?t(k):k}</option>`).join('')+`<option value="__c"${custom?' selected':''}>${t('hCustom')}</option>`;
  return `<label>${t('heading')}<select data-f="${i}.head">${opts}</select></label>${custom?`<input data-f="${i}.title" value="${esc(tx(bl.title,cur.src))}">`:''}`}
function blockHtml(bl,i){const S=cur.src,ta=(f,v,rows=3)=>`<textarea data-f="${i}.${f}" rows="${rows}">${esc(v)}</textarea>`;
  let body='';
  if(bl.k==='verse')body=`<label>${t('passage')}${refInput(bl.ref,i+'.ref')}</label><label>${t('role')}<select data-f="${i}.key"><option value="2"${bl.key===2?' selected':''}>${t('kSermon')}</option><option value="1"${bl.key===1?' selected':''}>${t('kKey')}</option><option value="0"${!bl.key?' selected':''}>${t('kPlain')}</option></select></label>`;
  else if(bl.k==='text')body=headSelect(bl,i)+`<label>${t('text')}${ta('x',tx(bl.x,S),5)}</label><label>${t('passages')}${refInput(bl.refs,i+'.refs',1)}</label>`;
  else if(bl.k==='point')body=`<label>${t('ptTitle')}<input data-f="${i}.h" value="${esc(tx(bl.h,S))}"></label><label>${t('passage')}${refInput(bl.ref,i+'.ref')}</label><label>${t('text')}${ta('x',tx(bl.x,S),4)}</label><label>${t('takeaways')}${ta('take',(bl.take||[]).map(x=>tx(x,S)).join('\n'),3)}</label><label>${t('passages')}${refInput(bl.refs,i+'.refs',1)}</label>`;
  else if(bl.k==='list')body=headSelect(bl,i)+`<label>${t('items')}${ta('items',(bl.items||[]).map(x=>tx(x,S)).join('\n'),4)}</label><label>${t('passages')}${refInput(bl.refs,i+'.refs',1)}</label>`;
  else if(bl.k==='refs')body=`<label>${t('passages')}${refInput(bl.refs,i+'.refs',1)}</label>`;
  else if(bl.k==='steps')body=`<label>${t('text')}${ta('x',tx(bl.x,S))}</label><label>${t('items')}${ta('items',(bl.items||[]).map(x=>tx(x,S)).join('\n'))}</label><label>${t('after')}${ta('after',tx(bl.after,S))}</label><label>${t('passages')}${refInput(bl.refs,i+'.refs',1)}</label>`;
  return `<div class="block" data-i="${i}"><div class="bhead"><span class="bname">${bl.k==='point'?`${t('bPoint')} ${bl.n||''}`:t(blockName[bl.k]||bl.k)}</span><span class="bctl"><button data-mv="${i},-1" title="${t('up')}">↑</button><button data-mv="${i},1" title="${t('down')}">↓</button><button data-rm="${i}" title="${t('remove')}">✕</button></span></div>${body}</div>`}
function renumber(){let n=0;cur.data.blocks.forEach(b=>{if(b.k==='point')b.n=++n})}
function renderEditor(){const d=cur.data,S=cur.src;renumber();
  $('#editor').innerHTML=`<div class="edtop"><div class="status ${cur.status}">${cur.status==='published'?t('published'):t('draft')}</div>
     <div class="acts"><button class="btn ghost" id="eDetect">${t('detect')}</button><button class="btn ghost" id="eTr">${t('trBtn')}</button>${cur.id&&cur.status==='published'?`<a class="btn ghost" target="_blank" href="${esc(appLink(cur))}">${t('openApp')}</a>`:''}<button class="btn" id="eSave">${t('save')}</button><button class="btn gold" id="ePub">${cur.status==='published'?t('publish')+' ✓':t('publish')}</button></div></div>
   <label class="drop slim" id="eDrop"><input type="file" class="vh" id="eFile" accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"><b>${t('upBtn')}</b><span>${t('upSub')}</span></label>
   <div class="grid2"><label>${t('date')}<input type="date" data-f="date" value="${esc(cur.date)}"></label><label>${t('lang')}<select data-f="src">${Object.entries(LANGS).map(([k,v])=>`<option value="${k}"${k===S?' selected':''}>${v}</option>`).join('')}</select></label></div>
   <label class="big">${t('title')}<input data-f="title" value="${esc(tx(d.title,S))}"></label>
   <div class="grid3"><label>${t('series')}<input data-f="series" value="${esc(tx(d.series,S))}"></label><label>${t('part')}<input type="number" min="1" data-f="part" value="${d.part||''}"></label><label>${t('by')}<input data-f="by" value="${esc(d.by||'')}"></label></div>
   <h3>${t('blocks')}</h3><div id="blocks">${d.blocks.map(blockHtml).join('')}</div>
   <div class="addrow"><span>${t('add')}:</span>${Object.keys(blockName).map(k=>`<button class="chip" data-add="${k}">+ ${t(blockName[k])}</button>`).join('')}</div>
   <p class="note">${t('transNote')}</p>
   <div class="danger">${cur.id?`${cur.status==='published'?`<button class="btn ghost" id="eUnpub">${t('unpublish')}</button>`:''}<button class="btn ghost red" id="eDel">${t('del')}</button>`:''}</div>`;
  wireEditor();paintAllRefs();renderPreview()}
function bindVal(path,val){const d=cur.data,S=cur.src;dirty=true;
  if(path==='date'){cur.date=val;return}if(path==='src'){cur.src=val;loadBible(val).then(()=>{renderEditor()});return}
  if(path==='title'||path==='series'){d[path]=setTx(S,val.trim());return}if(path==='part'){d.part=val?+val:null;return}if(path==='by'){d.by=val.trim()||null;return}
  const [i,f]=path.split('.');const bl=d.blocks[+i];
  if(f==='x'||f==='after'||(f==='h'&&bl.k==='point'))bl[f]=setTx(S,val.trim());
  else if(f==='title')bl.title=setTx(S,val.trim());
  else if(f==='take'||f==='items')bl[f]=val.split('\n').map(s=>s.trim()).filter(Boolean).map(s=>({[S]:s}));
  else if(f==='key')bl.key=+val||0;
  else if(f==='head'){if(val==='__c'){bl.h=null;bl.title=bl.title||setTx(S,' ')}else{bl.h=val||null;delete bl.title}renderEditor();return}}
function wireEditor(){
  $$('#editor [data-f]').forEach(el=>{const ev=el.tagName==='SELECT'||el.type==='date'?'change':'input';el.addEventListener(ev,()=>{bindVal(el.dataset.f,el.value);renderPreview()})});
  $$('#editor input.ref').forEach(el=>el.addEventListener('input',()=>{const [i,f]=el.dataset.ref.split('.');const bl=cur.data.blocks[+i];
    if(el.dataset.multi==='1')bl[f]=el.value.split(';').map(parseRef).filter(Boolean);else bl[f]=parseRef(el.value);dirty=true;paintRefs(el);renderPreview()}));
  $$('#editor [data-add]').forEach(b=>b.onclick=()=>{const k=b.dataset.add;const nb={verse:{k,ref:null,key:0},text:{k,h:null,x:null},point:{k,h:null,x:null,ref:null,take:[]},list:{k,h:'svcQuestions',items:[]},refs:{k,refs:[]},steps:{k,h:'svcNext',x:null,items:[],after:null}}[k];
    cur.data.blocks.push(nb);dirty=true;renderEditor();const last=$$('#blocks .block').pop();last&&last.scrollIntoView({behavior:'smooth',block:'center'})});
  $$('#editor [data-mv]').forEach(b=>b.onclick=()=>{const [i,d]=b.dataset.mv.split(',').map(Number);const a=cur.data.blocks;const j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];dirty=true;renderEditor()});
  $$('#editor [data-rm]').forEach(b=>b.onclick=()=>{cur.data.blocks.splice(+b.dataset.rm,1);dirty=true;renderEditor()});
  $('#eSave').onclick=()=>save(cur.status);$('#ePub').onclick=()=>save('published');
  if($('#eUnpub'))$('#eUnpub').onclick=()=>save('draft');
  if($('#eDel'))$('#eDel').onclick=async e=>{const b=e.currentTarget;if(!b.dataset.sure){b.dataset.sure=1;b.textContent=t('delSure');return}
    try{await api(`/rest/v1/services?id=eq.${encodeURIComponent(cur.id)}`,{method:'DELETE'});cur=null;dirty=false;await loadServices();showMain()}catch(x){toast(errMsg(x))}};
  $('#eDetect').onclick=()=>openDetect();$('#eTr').onclick=openTranslate;
  $('#eFile').onchange=e=>{const f=e.target.files[0];e.target.value='';if(f)openDetect(f)};
  const ez=$('#eDrop');ez.ondragover=e=>{e.preventDefault();ez.classList.add('over')};ez.ondragleave=()=>ez.classList.remove('over');
  ez.ondrop=e=>{e.preventDefault();e.stopPropagation();ez.classList.remove('over');const f=e.dataTransfer.files[0];if(f)openDetect(f)}}
function paintRefs(el){const box=$(`[data-chips="${el.dataset.ref}"]`);const parts=el.dataset.multi==='1'?el.value.split(';').map(s=>s.trim()).filter(Boolean):[el.value.trim()].filter(Boolean);
  box.innerHTML=parts.map(p=>{const r=parseRef(p);return r?`<span class="rc ok" title="${esc(refText(r,cur.src).slice(0,400))}">${esc(refLabel(r,cur.src))}</span>`:`<span class="rc bad">${esc(p)} · ${t('unknown')}</span>`}).join('')}
function paintAllRefs(){$$('#editor input.ref').forEach(paintRefs)}
async function save(status){if(!cur.data.title){$('[data-f="title"]').focus();return}
  const S=cur.src;cur.data.blocks=cur.data.blocks.filter(b=>!(b.k==='verse'&&!b.ref));
  const id=cur.id||`${church.id}-${cur.date}-${slug(tx(cur.data.title,S)).slice(0,24)}`;
  const row={id,church_id:church.id,date:cur.date,src:S,status,data:cur.data,updated_at:new Date().toISOString()};
  try{await api('/rest/v1/services?on_conflict=id',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(row)});
    cur.id=id;cur.status=status;dirty=false;await loadServices();toast(status==='published'?t('pubOk'):t('saved'));showMain()}catch(e){toast(errMsg(e))}}

/* ---------- reference finder ---------- */
/* text out of a PDF, Word file or plain text, read right here in the browser: nothing is uploaded */
const loadScript=src=>new Promise((ok,no)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=no;document.head.appendChild(s)});
async function fileText(f){const name=(f.name||'').toLowerCase();
  if(name.endsWith('.pdf')||f.type==='application/pdf'){
    if(!window.pdfjsLib){await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'}
    const pdf=await pdfjsLib.getDocument({data:await f.arrayBuffer()}).promise;const out=[];
    for(let i=1;i<=pdf.numPages;i++){const c=await (await pdf.getPage(i)).getTextContent();let line='',last=null;
      for(const it of c.items){const y=it.transform[5];if(last!==null&&Math.abs(y-last)>2){out.push(line);line=''}line+=(line&&!line.endsWith(' ')&&!it.str.startsWith(' ')?' ':'')+it.str;last=y}out.push(line)}
    return out.join('\n').replace(/\n{3,}/g,'\n\n').trim()}
  if(name.endsWith('.docx')){if(!window.mammoth)await loadScript('https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js');
    return (await mammoth.extractRawText({arrayBuffer:await f.arrayBuffer()})).value.trim()}
  return (await f.text()).trim()}
async function aiCall(body){const tk=await token();const r=await fetch(SB.url+'/functions/v1/import-handout',{method:'POST',headers:{'Content-Type':'application/json',apikey:SB.key,Authorization:'Bearer '+tk},body:JSON.stringify({church_id:church.id,...body})});
  const j=await r.json().catch(()=>({}));if(!r.ok)throw j.error||r.status;return j}
/* every text of the service in the language it was written in: {de:'…', en:'…'} objects */
function langObjs(d,S){const out=[];const walk=o=>{if(!o||typeof o!=='object')return;if(Array.isArray(o))return o.forEach(walk);
  const ks=Object.keys(o);if(ks.length&&ks.every(k=>LANGS[k])){if(typeof o[S]==='string'&&o[S].trim())out.push(o);return}for(const k in o)walk(o[k])};walk(d);return out}
function openTranslate(){const m=$('#modal'),S=cur.src,objs=langObjs(cur.data,S),has=l=>objs.length&&objs.every(o=>o[l]);
  m.hidden=false;m.innerHTML=`<div class="mbox"><h2>${t('trTitle')}</h2><p class="sub">${t('trSub',LANGS[S])}</p>
  <div class="langs">${Object.entries(LANGS).filter(([k])=>k!==S).map(([k,v])=>`<label class="lc"><input type="checkbox" value="${k}"> <span>${v}</span>${has(k)?`<small>✓ ${t('trHas')}</small>`:''}</label>`).join('')}</div>
  <p class="hint" id="trMsg" hidden></p><div class="mact"><button class="btn ghost" id="trCancel">${t('cancel')}</button><button class="btn gold" id="trGo">${t('trGo')}</button></div></div>`;
  $('#trCancel').onclick=()=>m.hidden=true;
  $('#trGo').onclick=async()=>{const msg=$('#trMsg'),b=$('#trGo'),langs=$$('.langs input:checked').map(i=>i.value);msg.hidden=false;
    if(!objs.length){msg.textContent=t('trEmpty');return}if(!langs.length){msg.textContent=t('trNone');return}
    b.disabled=true;b.classList.add('busy');msg.textContent=t('trWait');
    try{const gl=[];for(const v of services||[])if(v.id!==cur.id)for(const o of [v.data&&v.data.series,v.data&&v.data.title])if(o&&o[S]){const g={[S]:o[S]};let any=0;for(const l of langs)if(o[l]){g[l]=o[l];any=1}if(any&&!gl.some(x=>x[S]===o[S]))gl.push(g)}
    const j=await aiCall({mode:'translate',src:S,langs,texts:objs.map(o=>o[S]),glossary:gl.slice(0,40)});
      for(const l of langs)(j.translations[l]||[]).forEach((x,i)=>{if(objs[i]&&x)objs[i][l]=x});dirty=true;m.hidden=true;renderEditor();toast(t('trOk'))}
    catch(e){console.error('translate',e);msg.textContent=e==='no_key'?t('aiNoKey'):t('aiFail')}finally{b.disabled=false;b.classList.remove('busy')}}}
/* the AI import answers in a neutral shape; this turns it into the editor's blocks */
function fromAI(s){if(LANGS[s.lang])cur.src=s.lang;const S=cur.src,P=x=>x?parseRef(x):null,PS=a=>(a||[]).map(P).filter(Boolean),L=o=>typeof o==='string'&&o.trim()?{[S]:o.trim()}:null;
  const H={intro:'svcIntro',core:'svcCore',gospel:'svcGospel',questions:'svcQuestions',prayer:'svcPrayer',next:'svcNext'};
  const blocks=[];const st=P(s.sermon_text),kv=P(s.key_verse);
  if(st)blocks.push({k:'verse',ref:st,key:2});if(kv&&(!st||kv.join()!==st.join()))blocks.push({k:'verse',ref:kv,key:1});
  let n=0;for(const b of s.blocks||[]){const refs=PS(b.passages),h=H[b.heading]||null,title=b.heading==='custom'?L(b.custom_heading):null;
    if(b.kind==='point')blocks.push({k:'point',n:++n,h:L(b.point_title),ref:P(b.passage),x:L(b.text),take:(b.takeaways||[]).map(L).filter(Boolean),refs});
    else if(b.kind==='list')blocks.push({k:'list',h:title?null:h,title,items:(b.items||[]).map(L).filter(Boolean),refs});
    else if(b.kind==='refs'){if(refs.length)blocks.push({k:'refs',refs})}
    else blocks.push({k:'text',h:title?null:h,title,x:L(b.text),refs})}
  cur.data={...cur.data,title:L(s.title),series:L(s.series),part:s.part||null,by:s.speaker||cur.data.by||null,blocks};
  if(/^\d{4}-\d\d-\d\d$/.test(s.date||''))cur.date=s.date;dirty=true;renderEditor()}
function openDetect(initFile){const m=$('#modal');m.hidden=false;m.innerHTML=`<div class="mbox"><h2>${t('detect')}</h2><p class="sub">${t('detectSub')}</p>
  <label class="drop" id="dDrop"><input type="file" class="vh" id="dFile" accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"><b>${t('fileBtn')}</b><span>${t('fileSub')}</span></label>
  <p class="hint" id="dFileMsg" hidden></p><textarea id="dText" rows="8" placeholder="${t('pastePh')}"></textarea>
  <div class="dres" id="dRes"></div><div class="mact"><button class="btn ghost" id="dCancel">${t('cancel')}</button><button class="btn" id="dGo">${t('detectGo')}</button><button class="btn gold" id="dAI">${t('aiBtn')}</button></div></div>`;
  $('#dCancel').onclick=()=>m.hidden=true;let found=[];
  const take=async f=>{if(!f)return;const msg=$('#dFileMsg');msg.hidden=false;msg.textContent=t('reading',f.name);
    try{const txt=await fileText(f);$('#dText').value=txt;msg.textContent=t('readOk',f.name);$('#dGo').click();$('#dAI').focus()}catch(e){console.error(e);msg.textContent=t('readFail')}};
  $('#dFile').onchange=e=>take(e.target.files[0]);
  const dz=$('#dDrop');dz.ondragover=e=>{e.preventDefault();dz.classList.add('over')};dz.ondragleave=()=>dz.classList.remove('over');
  dz.ondrop=e=>{e.preventDefault();e.stopPropagation();dz.classList.remove('over');take(e.dataTransfer.files[0])};
  if(initFile)setTimeout(()=>take(initFile),0);
  $('#dAI').onclick=async()=>{const txt=$('#dText').value.trim(),msg=$('#dFileMsg'),b=$('#dAI');
    if(txt.length<40){msg.hidden=false;msg.textContent=t('aiShort');return}
    const full=cur.data.title||cur.data.blocks.some(x=>x.x||x.h&&x.k==='point'||(x.items||[]).length);
    if(full&&!confirm(t('aiReplace')))return;
    b.disabled=$('#dGo').disabled=true;msg.hidden=false;msg.textContent=t('aiWait');b.classList.add('busy');
    try{const j=await aiCall({mode:'import',text:txt});if(!j.service)throw 'empty';
      fromAI(j.service);m.hidden=true;toast(t('aiOk'))}
    catch(e){console.error('AI import',e);msg.textContent=e==='no_key'?t('aiNoKey'):t('aiFail')}
    finally{b.disabled=$('#dGo').disabled=false;b.classList.remove('busy')}};
  $('#dGo').onclick=()=>{found=findRefs($('#dText').value);$('#dRes').innerHTML=`<p><b>${t('found',found.length)}</b></p><div class="refchips">${found.map(r=>`<span class="rc ok">${esc(refLabel(r,cur.src))}</span>`).join('')}</div>`+
    (found.length?`<div class="mact"><button class="btn ghost" id="dMain">${t('detectMain')}</button><button class="btn gold" id="dAdd">${t('detectAdd')}</button></div>`:'');
    if(!found.length)return;
    $('#dAdd').onclick=()=>{cur.data.blocks.push({k:'refs',refs:found});dirty=true;m.hidden=true;renderEditor()};
    $('#dMain').onclick=()=>{const v=cur.data.blocks.find(b=>b.k==='verse'&&b.key===2);if(v)v.ref=found[0];else cur.data.blocks.unshift({k:'verse',ref:found[0],key:2});
      if(found.length>1)cur.data.blocks.push({k:'refs',refs:found.slice(1)});dirty=true;m.hidden=true;renderEditor()}}}

/* ---------- preview: how members will see it ---------- */
const HEADS={svcIntro:'hIntro',svcCore:'hCore',svcGospel:'hGospel',svcQuestions:'hQuestions',svcPrayer:'hPrayer',svcNext:'hNext'};
function renderPreview(){const box=$('#preview');if(!cur){box.innerHTML='';return}const d=cur.data,S=cur.src,P=x=>{const v=tx(x,S);return v?v.split(/\n+/).map(p=>`<p>${esc(p)}</p>`).join(''):''};
  const card=r=>r?`<div class="pv-card"><b>${esc(refLabel(r,S))}</b><p>${esc(refText(r,S))}</p></div>`:'';
  const H=bl=>bl.h?`<h5>${t(HEADS[bl.h]||bl.h)}</h5>`:bl.title?`<h5>${esc(tx(bl.title,S))}</h5>`:'';
  let h=`<div class="pv-eye">${esc(tx(d.series,S))}${d.part?' · '+d.part:''}</div><h2>${esc(tx(d.title,S)||'…')}</h2><div class="pv-meta">${esc(church.name)}${d.by?' · '+esc(d.by):''} · ${esc(fmtDate(cur.date))}</div>`;
  for(const bl of d.blocks){
    if(bl.k==='verse')h+=`${bl.key?`<h5>${bl.key===2?t('kSermon'):t('kKey')}</h5>`:''}${card(bl.ref)}`;
    else if(bl.k==='text')h+=H(bl)+P(bl.x)+(bl.refs||[]).map(card).join('');
    else if(bl.k==='point')h+=`<h4><span>${bl.n}</span>${esc(tx(bl.h,S))}</h4>${card(bl.ref)}${P(bl.x)}${(bl.take||[]).map(x=>`<p class="pv-take">→ ${esc(tx(x,S))}</p>`).join('')}${(bl.refs||[]).map(card).join('')}`;
    else if(bl.k==='list')h+=H(bl)+`<ul>${(bl.items||[]).map(x=>`<li>${esc(tx(x,S))}</li>`).join('')}</ul>`+(bl.refs||[]).map(card).join('');
    else if(bl.k==='refs')h+=`<h5>${t('bRefs')}</h5><div class="refchips">${(bl.refs||[]).map(r=>`<span class="rc ok">${esc(refLabel(r,S))}</span>`).join('')}</div>`;
    else if(bl.k==='steps')h+=H(bl)+P(bl.x)+`<ol>${(bl.items||[]).map(x=>`<li>${esc(tx(x,S))}</li>`).join('')}</ol>`+P(bl.after)+(bl.refs||[]).map(card).join('')}
  box.innerHTML=`<div class="pv-label">${t('preview')}</div><div class="phone"><div class="pv">${h}</div></div>`}

/* ---------- start ---------- */
$('#langBtn').onclick=()=>{UI=UI==='de'?'en':'de';ls.set('portalLang',UI);render()};
$('#signOut').onclick=async()=>{try{await api('/auth/v1/logout',{method:'POST'})}catch(e){}sess=null;ls.set('portalSession','');churches=[];church=null;cur=null;render()};
window.addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue=''}});
(async()=>{document.title=`${BRAND} for Churches`;$$('.brand-name').forEach(e=>e.textContent=BRAND);
  try{META=await (await fetch('../meta.json')).json();buildNames()}catch(e){}
  if(sess){try{await loadChurches();await loadServices()}catch(e){}}
  render();loadBible(UI==='de'?'de':'en');loadBible('en')})();

/* a file dropped next to a drop zone would otherwise replace the portal with the PDF */
addEventListener('dragover',e=>e.preventDefault());addEventListener('drop',e=>{e.preventDefault();const f=e.dataTransfer&&e.dataTransfer.files[0];if(f&&cur&&$('#editor')&&!$('#main').hidden)openDetect(f)});
