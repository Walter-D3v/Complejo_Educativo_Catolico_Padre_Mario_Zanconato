import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>2220 6170 / 7928 5341</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>cecezanconato@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Ubicación</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span>
                Calle 25 de abril oriente y Avenida Padre Mario Zanconato, contiguo a Parroquia San Marcos Evangelista.
                San Marcos, San Salvador Sur.
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Horario de Oficina</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Lunes a Viernes:</p>
              <p>7:00 am - 12:00 m</p>
              <p>1:00 pm - 6:00 pm</p>
              <p className="mt-2">Sábados: 8:00 am - 12:00 m</p>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p className="italic mb-2">
            "Instruye al niño en su camino y aun cuando fuere viejo no se apartará de él" - Prov. 22:6
          </p>
          <p>© 2025 Complejo Educativo Católico Padre Mario Zanconato. Acuerdo de Creación No. 15-0146</p>
        </div>
      </div>
    </footer>
  )
}
