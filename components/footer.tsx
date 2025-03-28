export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900/95 to-blue-800 py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="text-white text-base">
          <p>BRASMONTAGEM LAMINAÇÃO EM FIBRA DE VIDRO LTDA</p>
          <p className="mt-2">CNPJ: 51.449.095/0001-66</p>
          <p className="mt-4 text-white text-sm">
            © {new Date().getFullYear()} Brasmontagem. Todos os direitos reservados.<br/>
            Desenvolvido com tecnologia de ponta para soluções industriais.
          </p>
        </div>
      </div>
    </footer>
  );
}