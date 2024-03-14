import { HomeComponent } from "@/components/Home";

export default function Home() {
  return (
    <main className="w-full flex h-full flex-col gap-10 mt-24">
      <HomeComponent />
      <div className="w-full flex-col justify-around sm:flex md:flex-row">
        <div className="max-w-[800px] max-h-[600px] justify-center items-center">
          <img
            src="/penalapa.jpg"
            alt=""
            className="w-full h-full flex rounded-md shadow-md shadow-black/50"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-2 text-white sm:w-1/2">
          <h1 className="text-2xl font-bold text-white ">Sobre nós</h1>
          <p className="text-md text-center">
            🍽 Bem-vindo ao Pé na Lapa, um destino gastronômico acolhedor situado
            no coração da Lapa desde 2017. Somos uma equipe familiar dedicada a
            proporcionar experiências culinárias autênticas e memoráveis.
            Descubra o sabor autêntico da culinária brasileira em nossas
            especialidades, que incluem irresistíveis parmegianas, feijoadas
            tradicionais e, é claro, nossa famosa empada de palmito, preparada
            com ingredientes frescos e cuidadosamente selecionados.
          </p>
        </div>
      </div>

      <div className="w-full flex-col justify-around sm:flex md:flex-row">
        <div className="flex flex-col justify-center items-center p-2 text-white sm:w-1/2">
          <h1 className="text-2xl font-bold text-white ">Comida di Buteco</h1>
          <p className="text-md text-center">
          O Comida di Buteco nasceu em 2000 com o objetivo de resgatar os butecos autênticos, aqueles que todo mundo tem no coração. Ao longo desses anos, com legitimidade definimos nossa razão de ser: TRANSFORMAR VIDAS ATRAVÉS DA COZINHA DE RAIZ – BUTECO EXTENSÃO DE SUA CASA. Ao longo dos nossos 23 anos, estamos desenvolvendo um importante papel de fomento à cultura e à cozinha de raiz.
          </p>
        </div>
        <div className="max-w-[800px] max-h-[600px] justify-center items-center">
          <video
            src="/IMG_3690.mov"
            className="w-full h-full flex rounded-md shadow-md shadow-black/50"
            controls
          />
        </div>
      </div>

      <div className="w-full flex justify-center px-10 sm:px-32">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1817333336753!2d-46.69123662378924!3d-23.525965160294547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef80b22709587%3A0xf6df21a394bb36f7!2sR.%20Coriolano%2C%20336%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005047-000!5e0!3m2!1spt-BR!2sbr!4v1710375885704!5m2!1spt-BR!2sbr"  loading="lazy" className="w-full rounded-md h-[300px]"/>
      </div>
    </main>
  );
}
