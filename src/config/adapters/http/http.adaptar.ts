// es abstract porque no tengo intenciones de hacer una instancia de esa clase
// solo definimos las reglas de los metodos y propiedades que las clases que extiendan de este adaptador deben tener
export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
