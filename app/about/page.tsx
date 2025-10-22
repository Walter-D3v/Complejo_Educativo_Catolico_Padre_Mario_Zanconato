import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Sparkles, TrendingUp, Clock, DollarSign, FileText, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-institutional-mustard/10 to-institutional-navy/10 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 text-balance">
            Acerca de Nosotros
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Complejo Educativo Católico Padre Mario Zanconato
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">Acuerdo de Creación No. 15-0146</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-institutional-navy/10 flex items-center justify-center">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-institutional-navy" />
                </div>
                <CardTitle className="text-lg md:text-xl">Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Somos una Institución líder en la formación integral de jóvenes con fortaleza espiritual, para que
                respondan a las exigencias de un nuevo siglo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-institutional-navy/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-institutional-navy" />
                </div>
                <CardTitle className="text-lg md:text-xl">Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Ser una Institución con liderazgo en la formación integral de los educandos con proyección a la
                sociedad, teniendo como base el amor a Dios y al prójimo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-institutional-navy/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-institutional-navy" />
                </div>
                <CardTitle className="text-lg md:text-xl">Valores</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-institutional-navy" />
                  <span className="text-sm md:text-base">Espiritualidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-institutional-navy" />
                  <span className="text-sm md:text-base">Unidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-institutional-navy" />
                  <span className="text-sm md:text-base">Disciplina</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-institutional-navy" />
                  <span className="text-sm md:text-base">Responsabilidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-institutional-navy" />
                  <span className="text-sm md:text-base">Superación</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educational Services */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Servicios Educativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">Condiciones de aprendizaje saludables</p>
            </div>
            <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">Atención diferenciada y especializada</p>
            </div>
            <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">Escenarios de superación personal y social</p>
            </div>
            <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">Formación en la práctica de valores espirituales</p>
            </div>
            <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">Programa de paquetes escolares y alimentación</p>
            </div>
            <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">Asistencia psicológica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Added Values */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Valores Agregados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">Enseñanza del idioma Inglés desde Parvularia hasta Bachillerato</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">Enseñanza de Informática desde 4° grado</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">Consejería Espiritual</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">Banda Musical</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">Actividades recreativas e intramuros</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">Curso de Inducción y nivelación escolar GRATIS</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedules */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Horarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <CardTitle>Horario de Clases</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-sm mb-1">Parvularia (Matutino)</p>
                  <p className="text-sm text-muted-foreground">08:00 a.m. - 11:30 a.m.</p>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Parvularia (Vespertino)</p>
                  <p className="text-sm text-muted-foreground">01:00 p.m. - 04:30 p.m.</p>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Básica (Matutino)</p>
                  <p className="text-sm text-muted-foreground">07:00 a.m. - 12:00 m.</p>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Básica (Vespertino)</p>
                  <p className="text-sm text-muted-foreground">01:00 p.m. - 06:00 p.m.</p>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Bachillerato</p>
                  <p className="text-sm text-muted-foreground">
                    Según horario - 6:00 p.m. (Sábados 7:00 a.m. - 12:00 m.)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <CardTitle>Curso de Inducción</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary mb-2">GRATIS para nuevo ingreso</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium">Fecha:</p>
                      <p className="text-muted-foreground">01/12/2025 al 12/12/2025</p>
                    </div>
                    <div>
                      <p className="font-medium">Horario:</p>
                      <p className="text-muted-foreground">7:00 a.m. a 12:00 m.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tuition Fees */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">Aranceles</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-institutional-navy" />
                <CardTitle className="text-lg md:text-xl">Costos de Matrícula y Colegiaturas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-2 md:mx-0">
                <table className="w-full text-xs md:text-sm min-w-[500px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 md:py-3 px-1 md:px-2">Nivel</th>
                      <th className="text-left py-2 md:py-3 px-1 md:px-2">Matrícula</th>
                      <th className="text-left py-2 md:py-3 px-1 md:px-2">Matutino</th>
                      <th className="text-left py-2 md:py-3 px-1 md:px-2">Vespertino</th>
                      <th className="text-left py-2 md:py-3 px-1 md:px-2">Cuotas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 md:py-3 px-1 md:px-2">Parvularia</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$26.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$15.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$15.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">12</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 md:py-3 px-1 md:px-2">Primer Ciclo</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$18.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$15.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$14.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">12</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 md:py-3 px-1 md:px-2">Segundo Ciclo</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$23.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$17.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$16.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">12</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 md:py-3 px-1 md:px-2">Tercer Ciclo</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$26.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$18.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$17.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">12</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 md:py-3 px-1 md:px-2">Bachillerato</td>
                      <td className="py-2 md:py-3 px-1 md:px-2">$20.00</td>
                      <td className="py-2 md:py-3 px-1 md:px-2" colSpan={2}>
                        $14.00 (incluye diplomado)
                      </td>
                      <td className="py-2 md:py-3 px-1 md:px-2">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 md:mt-6 space-y-2 text-xs md:text-sm text-muted-foreground">
                <p>
                  • Ficha de inscripción, talonario, Normativa de Convivencia, Reglamento Interno Estudiantil y Carnet
                  Institucional: <span className="font-medium">$10.00</span> (aporte único)
                </p>
                <p>
                  • Cuota de preparación de alimentos: <span className="font-medium">$3.00</span> (enero a octubre)
                </p>
                <p>• Por retraso en el pago: 10% sobre el valor de la mensualidad</p>
                <p>• Una vez matriculado no se realizará ninguna devolución económica</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Proceso de Admisión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <CardTitle>Nuevo Ingreso</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      1
                    </Badge>
                    <span className="text-sm">Adquirir prospecto</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      2
                    </Badge>
                    <span className="text-sm">Agendar entrevista familiar con Rector o Director</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      3
                    </Badge>
                    <span className="text-sm">Programar entrevista psicológica</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      4
                    </Badge>
                    <span className="text-sm">Llenar ficha de inscripción</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      5
                    </Badge>
                    <span className="text-sm">Realizar Curso de Inducción</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <CardTitle>Procedimiento de Matrícula</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      1
                    </Badge>
                    <span className="text-sm">Presentar ficha de matrícula llena</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      2
                    </Badge>
                    <span className="text-sm">Presentar documentación en folder tamaño carta</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      3
                    </Badge>
                    <span className="text-sm">Entrevista con Orientador o Director</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      4
                    </Badge>
                    <span className="text-sm">Cancelar aranceles de matrícula y primera mensualidad</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="shrink-0">
                      5
                    </Badge>
                    <span className="text-sm">Entrega de Carnet Estudiantil</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Required Documents */}
          <Card className="max-w-3xl mx-auto mt-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <CardTitle>Documentos Requeridos</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Certificación de partida de nacimiento reciente (3 meses)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Boleta de calificaciones finales (nota mínima 7.0)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Fe de Bautismo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Constancia de conducta</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>2 fotografías blanco y negro (3.5 x 2.5 cm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Fotocopia de DUI del responsable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Copia de cartilla de vacunación (parvularia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Constancia de Servicio Social (2° Año Bachillerato)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
