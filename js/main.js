/* ===== CORONITA 👑 — Test ¿Qué princesa de Disney eres? ===== */
const P=[
 {name:"Rapunzel",emoji:"🌸",tag:"La soñadora creativa",img:"assets/princesses/rapunzel.png",desc:"Tienes curiosidad por el mundo y un universo interior lleno de ideas. Te encanta descubrir cosas nuevas y expresarte a tu manera.",quote:"Tu curiosidad puede llevarte a lugares increíbles."},
 {name:"Mulan",emoji:"⚔️",tag:"La valiente estratega",img:"assets/princesses/mulan.png",desc:"No necesitas seguir el camino que todos esperan de ti. Analizas, te adaptas y encuentras tu propia manera de afrontar los retos.",quote:"Ser tú misma también requiere valentía."},
 {name:"Bella",emoji:"📚",tag:"La mente curiosa",img:"assets/princesses/bella.png",desc:"Te atraen las ideas, las historias y las conversaciones interesantes. Para ti, conocer a alguien va mucho más allá de las apariencias.",quote:"Siempre hay algo nuevo por descubrir."},
 {name:"Tiana",emoji:"🍃",tag:"La constructora de sueños",img:"assets/princesses/tiana.png",desc:"Te gusta convertir las ideas en acciones. Puedes ser práctica, perseverante y consciente de que los sueños también necesitan un plan.",quote:"Un pequeño paso también es progreso."},
 {name:"Ariel",emoji:"🫧",tag:"La exploradora rebelde",img:"assets/princesses/ariel.png",desc:"Lo desconocido te llama. Te encanta imaginar posibilidades y cuestionarte si hay algo más allá de lo que ya conoces.",quote:"Tu curiosidad merece espacio para crecer."},
 {name:"Jasmín",emoji:"🐅",tag:"El espíritu libre",img:"assets/princesses/jasmin.png",desc:"Valoras tu independencia y quieres tomar tus propias decisiones. No te conformas fácilmente con que otras personas elijan tu historia.",quote:"Tu vida también debe sentirse tuya."},
 {name:"Cenicienta",emoji:"✨",tag:"La esperanza tranquila",img:"assets/princesses/cenicienta.png",desc:"Incluso cuando las cosas no salen como quieres, intentas conservar tu sensibilidad y tu esperanza. Tu fortaleza no necesita hacer ruido.",quote:"La amabilidad también puede ser una forma de fuerza."},
 {name:"Moana",emoji:"🌊",tag:"La líder aventurera",img:"assets/princesses/moana.png",desc:"Sientes el impulso de explorar, afrontar desafíos y descubrir de qué eres capaz. Te importa avanzar, pero también recordar de dónde vienes.",quote:"Puedes escuchar a los demás sin perder tu propia brújula."},
 {name:"Mérida",emoji:"🏹",tag:"El alma indomable",img:"assets/princesses/merida.png",desc:"No sigues guiones escritos por otros: disparas a tu propia diana. Tu independencia y tu carácter te hacen imposible de ignorar.",quote:"Tu destino lo eliges tú, y eso te hace única."},
 {name:"Pocahontas",emoji:"🍂",tag:"La voz de la naturaleza",img:"assets/princesses/pocahontas.png",desc:"Escuchas lo que otros no escuchan: el viento, la naturaleza y tu propia intuición. Buscas entender los dos lados de cada historia.",quote:"Escucha con el corazón: ahí están tus respuestas."},
 {name:"Elsa",emoji:"❄️",tag:"El corazón guardián",img:"assets/princesses/elsa.png",desc:"Te tomas en serio tus responsabilidades y a veces escondes lo que sientes para proteger a otros. Tu fuerza es real, aunque no la muestres.",quote:"Controlar tu mundo empieza por conocerte a ti misma."},
 {name:"Anna",emoji:"⛄",tag:"La luz optimista",img:"assets/princesses/anna.png",desc:"Eres de las que creen en la gente aunque nadie más lo haga. Tu optimismo no es ingenuo: es una forma de valentía.",quote:"Querer es poder, y tú lo sabes mejor que nadie."}
];
/* Cada opción de cada pregunta apunta al índice de su princesa (0-11) */
const Q=[
 ["Tu plan perfecto para un sábado sería…",[
  "Crear algo, explorar un lugar nuevo o perderme en mis ideas.",
  "Hacer algo difícil y demostrarme de qué soy capaz.",
  "Leer, aprender o tener una conversación profunda.",
  "Avanzar en un proyecto que me ilusiona.",
  "Vivir una aventura improvisada.",
  "Hacer lo que yo quiera, sin que decidan por mí.",
  "Un día tranquilo con personas que me hacen bien.",
  "Salir a descubrir algo que nunca he hecho.",
  "Competir, montar a caballo o romper mi propio récord.",
  "Pasear por la naturaleza y desconectar del ruido.",
  "Un plan tranquilo, con mi espacio y mi gente de confianza.",
  "Quedarme con las personas que quiero y reírnos de cualquier cosa."]],
 ["¿Qué te saca más de quicio?",[
  "Sentir que no puedo explorar ni expresarme.",
  "Que me subestimen.",
  "Que juzguen sin intentar comprender.",
  "Que no tomen en serio mis objetivos.",
  "Que todo sea siempre igual.",
  "Que intenten controlar mis decisiones.",
  "La crueldad y los conflictos innecesarios.",
  "Que me impidan seguir lo que considero importante.",
  "Que intenten elegir mi destino por mí.",
  "Que dañen la naturaleza o rompan la armonía.",
  "Que me presionen cuando necesito mi espacio.",
  "Que la gente se rinda sin siquiera intentarlo."]],
 ["Cuando aparece un problema, tú…",[
  "Busco una solución creativa.",
  "Me preparo y actúo con determinación.",
  "Investigo y analizo todas las opciones.",
  "Hago un plan y empiezo a ejecutarlo.",
  "Improviso y aprendo sobre la marcha.",
  "Defiendo mi postura y busco alternativas.",
  "Intento mantener la calma y actuar con paciencia.",
  "Escucho mi intuición y doy el primer paso.",
  "Veo directo al grano y digo lo que nadie quiere decir.",
  "Pongo distancia y miro el panorama completo antes de actuar.",
  "Primero me aseguro de que nadie salga herido.",
  "Busco apoyo en mi gente y no me doy por vencida."]],
 ["¿Qué valoras más en una amistad?",[
  "Poder ser auténticas y compartir aventuras.",
  "La lealtad cuando las cosas se complican.",
  "Las conversaciones que me hacen pensar.",
  "El apoyo mutuo y la sinceridad.",
  "La espontaneidad y la diversión.",
  "El respeto por mi independencia.",
  "La bondad y la confianza.",
  "El apoyo para crecer y perseguir sueños.",
  "La honestidad, aunque duela.",
  "La calma de las personas que entienden sin juzgar.",
  "La discreción: alguien en quien confiar mis secretos.",
  "La risa compartida y el «aquí estoy» incondicional."]],
 ["Elige tu escenario ideal.",[
  "Un jardín mágico lleno de colores.",
  "Un paisaje montañoso que desafíe mis límites.",
  "Una biblioteca enorme y acogedora.",
  "Una ciudad llena de oportunidades.",
  "El océano y un mundo por descubrir.",
  "Un palacio con las puertas abiertas al mundo.",
  "Un rincón tranquilo bajo un cielo estrellado.",
  "Una isla verde rodeada de mar.",
  "Los bosques escoceses, con libertad para correr.",
  "Un río tranquilo entre árboles altos.",
  "Una montaña nevada en calma absoluta.",
  "Un castillo cálido con luces y chocolate caliente."]],
 ["¿Cómo te describirían quienes te conocen?",[
  "Imaginativa y curiosa.",
  "Valiente y resolutiva.",
  "Observadora e inteligente.",
  "Responsable y perseverante.",
  "Espontánea y aventurera.",
  "Independiente y directa.",
  "Amable y paciente.",
  "Decidida y aventurera.",
  "Honesta y testaruda (con cariño).",
  "Serena y en sintonía con lo que la rodea.",
  "Reservada, pero leal a su manera.",
  "Optimista y de corazón gigante."]],
 ["¿Qué sueño te emociona más?",[
  "Crear algo que refleje quién soy.",
  "Superar un reto que parecía imposible.",
  "Aprender algo que cambie mi perspectiva.",
  "Construir una vida que me haga sentir orgullosa.",
  "Conocer un mundo de posibilidades.",
  "Diseñar mi futuro con libertad.",
  "Vivir en paz, rodeada de cariño y esperanza.",
  "Encontrar mi camino y hacer algo significativo.",
  "Poder elegir mi propio final feliz.",
  "Conectar mundos y personas diferentes.",
  "Aprender a soltar miedos y mostrarme como soy.",
  "Mantener unida a mi gente, pase lo que pase."]]
];

let n=0, A=Array(7).fill(null);
const $=id=>document.getElementById(id);

/* ---------- Compartir: la princesa viaja codificada en el enlace ---------- */
function encodeResult(){ return "#r=" + A.map(a=>a.toString(12)).join(""); }
function decodeResult(hash){
  const m=/^#r=([0-9ab]{7})$/.exec(hash || "");
  return m ? m[1].split("").map(c=>parseInt(c,12)) : null;
}
function resultURL(){
  const base=document.querySelector('meta[property="og:url"]')?.content || location.href;
  return base.split("#")[0] + encodeResult();
}
function winner(){
  const c=P.map((p,i)=>({p,i,s:A.filter(x=>x===i).length})).sort((a,b)=>b.s-a.s||a.i-b.i);
  return c[0];
}
function resultText(){
  const w=winner();
  return `👑 Mi princesa Disney es ${w.p.emoji} ${w.p.name}: ${w.p.tag}\n${w.p.desc}\n«${w.p.quote}»\n\n🔗 ${resultURL()}\n\n¿Cuál eres tú? Haz el test de CORONITA. Test recreativo no oficial.`;
}
async function copyText(text,okMsg){
  try{ await navigator.clipboard.writeText(text); $("status").textContent=okMsg; }
  catch(e){
    const ta=document.createElement("textarea");
    ta.value=text; ta.style.position="fixed"; ta.style.opacity="0";
    document.body.append(ta); ta.select();
    try{ document.execCommand("copy"); $("status").textContent=okMsg; }
    catch(err){ $("status").textContent="No se pudo copiar automáticamente. Puedes seleccionar el texto."; }
    ta.remove();
  }
}

/* ---------- Flujo del test ---------- */
function render(){
  const q=Q[n];
  $("progressText").textContent=`${n+1} de 7`;
  $("fill").style.width=`${(n+1)/7*100}%`;
  $("q").textContent=q[0];
  $("opts").replaceChildren();
  q[1].forEach((t,i)=>{
    const b=document.createElement("button");
    b.className="option"+(A[n]===i?" selected":"");
    b.type="button"; b.setAttribute("aria-pressed",A[n]===i);
    const l=document.createElement("span"); l.className="letter";
    l.textContent=A[n]===i?"✓":String.fromCharCode(65+i);
    const s=document.createElement("span"); s.textContent=t;
    b.append(l,s); b.onclick=()=>{A[n]=i;render()};
    $("opts").append(b);
  });
  $("back").disabled=n===0; $("back").style.opacity=n===0?".45":"1";
  $("next").disabled=A[n]===null;
  $("next").textContent=n===6?"Descubrir mi princesa 👑":"Siguiente →";
}
function start(){
  n=0; A=Array(7).fill(null);
  $("intro").hidden=true; $("result").hidden=true; $("quiz").hidden=false;
  render(); window.scrollTo(0,0);
}
function showResult(){
  const w=winner(), ties=P.map((p,i)=>({p,i,s:A.filter(x=>x===i).length})).filter(x=>x.s===w.s);
  $("quiz").hidden=true; $("result").hidden=false;
  $("princessImg").src=w.p.img; $("princessImg").alt="Ilustración de "+w.p.name;
  $("tag").textContent=w.p.tag.toUpperCase();
  $("name").textContent=w.p.name;
  $("desc").textContent=w.p.desc;
  $("quote").textContent="«"+w.p.quote+"»";
  $("tie").hidden=ties.length<2;
  $("tie").textContent=ties.length>1?"Plot twist: compartes puntuación con "+ties.slice(1).map(x=>x.p.name).join(" y ")+". ¡Tienes una mezcla de energías! 💗":"";
}
function finish(){
  showResult();
  history.replaceState(null,"",encodeResult());
  window.scrollTo(0,0);
}

/* ---------- Eventos ---------- */
$("start").onclick=start;
$("back").onclick=()=>{if(n>0){n--;render()}};
$("next").onclick=()=>{if(A[n]===null)return;if(n<6){n++;render()}else finish()};
$("again").onclick=()=>{history.replaceState(null,"",location.pathname);start()};
$("copy").onclick=()=>{copyText(resultText(),"¡Resultado copiado con su enlace! Ya puedes compartirlo 💗")};
$("share").onclick=async()=>{
  const w=winner();
  const data={title:"Mi princesa — CORONITA",text:`👑 Mi princesa Disney es ${w.p.emoji} ${w.p.name}: ${w.p.tag}`,url:resultURL()};
  if(navigator.share){
    try{ await navigator.share(data); }
    catch(e){ if(e.name!=="AbortError") copyText(resultText(),"No se pudo abrir el menú de compartir; copiamos tu resultado 💗"); }
  } else {
    copyText(resultText(),"Tu navegador no tiene menú de compartir: copiamos tu resultado con su enlace 💗");
  }
};

/* ---------- Entrada: si el enlace trae un resultado, se muestra directo ---------- */
(function init(){
  const saved=decodeResult(location.hash);
  if(saved){ A=saved; $("intro").hidden=true; showResult(); }
})();
