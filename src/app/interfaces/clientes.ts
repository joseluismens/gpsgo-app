
export interface Cliente{
    codigo_abonado: number;
    nombre: string;
    razon_social: string;
    giro: string;
    direccion: string;
    ciudad: string;
    comuna: string;
    region: string;
    rut: string;
    rep_legal: string;
    rut_rep_legal: string;
    tel_movil: string;
    fecha_ingreso: Date;
    fecha_pago: number;
    valor_equipo: number;
    valor_mensualidad: number;
    correo: string;
    cod_ejec_venta: string;
    tipo_cliente: string;
    estado: string;
    email_rlegal: string;
    ejecutivo:string,
    activo:string
    
}