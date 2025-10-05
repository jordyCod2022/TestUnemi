import { Code2, Mail, MapPin, Phone, Briefcase, GraduationCap, Award, Languages, Book } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-400">JB</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">Sobre Mí</a>
            <a href="#experience" className="text-slate-300 hover:text-emerald-400 transition-colors">Experiencia</a>
            <a href="#skills" className="text-slate-300 hover:text-emerald-400 transition-colors">Habilidades</a>
            <a href="#education" className="text-slate-300 hover:text-emerald-400 transition-colors">Educación</a>
            <a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="text-emerald-400 text-sm">Disponible para proyectos</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Jordy Bernabe
              </h1>
              <h2 className="text-2xl md:text-3xl text-emerald-400 mb-6">
                Ingeniero en Tecnologías de la Información
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Desarrollador full-stack especializado en crear soluciones innovadoras con Machine Learning,
                chatbots y aplicaciones web modernas. Apasionado por la tecnología y el aprendizaje continuo.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
                  Contactar
                </a>
                <a href="#experience" className="px-6 py-3 border border-slate-600 hover:border-emerald-500 text-white rounded-lg transition-colors">
                  Ver Experiencia
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <Code2 size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Sobre Mí</h2>
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Soy una persona sociable, organizada y responsable, con habilidades para el trabajo en equipo y la
              gestión de proyectos. Comprometida, adaptable y orientada a la resolución de problemas, con un
              enfoque de calidad en todas las tareas.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Fuera del ámbito profesional, disfruto aprendiendo sobre nuevas tecnologías de desarrollo y tomando
              cursos para ampliar mis conocimientos y habilidades en este campo.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Experiencia Laboral</h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Programador | Cooperativa Huancavilca</h3>
                  <p className="text-emerald-400 mb-4">2025 - Actualidad</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Técnico en desarrollo Java</li>
                    <li>• Colaboración en el desarrollo de sistema contable (En curso)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Programador</h3>
                  <p className="text-emerald-400 mb-4">2024</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Creé un asistente virtual para la gestión de incidentes basado en las prácticas de ITIL v4</li>
                    <li>• Colaboré en la construcción de sistemas, con implementación en plataformas como Tracker Tag</li>
                    <li>• Diseñé e implementé chatbots usando procesamiento de lenguaje natural (NLP)</li>
                    <li>• Desarrollé aplicaciones móviles enfocadas en experiencia de usuario y funcionalidad</li>
                    <li>• Construí un sistema de gestión para un zoológico</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Encargado de TICs | Consultora</h3>
                  <p className="text-emerald-400 mb-4">2024</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Desarrollé un sistema de certificación personalizado</li>
                    <li>• Construcción de la página web de VHCORP (en curso)</li>
                    <li>• Brindé soporte técnico para resolver problemas tecnológicos</li>
                    <li>• Administración y Soporte en Tecnologías de la Información</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Auxiliar de TICs | MIES</h3>
                  <p className="text-emerald-400 mb-4">2023</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Administré correos electrónicos institucionales utilizando Zimbra</li>
                    <li>• Gestioné y administré servidores de manera eficiente</li>
                    <li>• Brindé soporte técnico para resolver problemas tecnológicos</li>
                    <li>• Desarrollé un asistente virtual para la gestión de incidentes como proyecto de titulación</li>
                    <li>• Capacité a usuarios en el uso de sistemas en el MIES</li>
                    <li>• Manejé y administré dominios en entornos Windows Server</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Habilidades Técnicas</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold mb-2">Lenguajes de Programación:</p>
                  <p className="text-slate-300">Java, JavaScript, TypeScript, Python, Visual Basic</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Frameworks:</p>
                  <p className="text-slate-300">Angular, Django, Express, Laravel, React</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Chatbots y Asistentes:</p>
                  <p className="text-slate-300">Rasa, Dialogflow</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Bases de Datos:</p>
                  <p className="text-slate-300">MySQL, PostgreSQL</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Herramientas:</p>
                  <p className="text-slate-300">Node.js, API REST, Git, Docker, Filament</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Habilidades Profesionales</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Desarrollo de software</li>
                <li>• Gestión de proyectos y desarrollo de asistentes virtuales</li>
                <li>• Manejo básico de redes y servidores</li>
                <li>• Conocimiento avanzado de programas de computación</li>
                <li>• Competencia en Sistemas Linux</li>
                <li>• Cumplimiento normativo y ética profesional</li>
                <li>• Implementación de soluciones basadas en Machine Learning</li>
                <li>• Conocimiento en desarrollo frontend y back-end</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-emerald-400" size={24} />
                <h3 className="text-xl font-bold text-emerald-400">Idiomas</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Español (nativo)</li>
                <li>• Inglés (B1)</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Book className="text-emerald-400" size={24} />
                <h3 className="text-xl font-bold text-emerald-400">Cursos Realizados</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Machine Learning - UPSE</li>
                <li>• Networking Essentials - UPSE</li>
                <li>• JavaScript Essentials 1 (JSE) - Cisco</li>
                <li>• Universidad Java - Udemy (152h)</li>
                <li>• Universidad Python - Udemy (86h)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Educación</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <GraduationCap className="text-emerald-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ingeniero en Tecnologías de la Información
                </h3>
                <p className="text-emerald-400 mb-2">Universidad Estatal Península de Santa Elena</p>
                <p className="text-slate-400 mb-4">2020 - 2024</p>
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2 inline-block">
                  <Award className="text-emerald-400" size={20} />
                  <span className="text-emerald-400 font-semibold">Graduado con calificación excelente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Contacto</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-emerald-500/10 rounded-full">
                  <Phone className="text-emerald-400" size={32} />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Teléfono</h3>
              <a href="tel:0988981553" className="text-slate-300 hover:text-emerald-400 transition-colors">
                0988981553
              </a>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-emerald-500/10 rounded-full">
                  <Mail className="text-emerald-400" size={32} />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:bernabejoseph79@gmail.com" className="text-slate-300 hover:text-emerald-400 transition-colors break-all">
                bernabejoseph79@gmail.com
              </a>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-emerald-500/10 rounded-full">
                  <MapPin className="text-emerald-400" size={32} />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Ubicación</h3>
              <p className="text-slate-300">
                La Libertad, Barrio Los Tulipanes
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Jordy Bernabe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
