const tokens = {
  LLAVE_I: /{/,
  LLAVE_D: new RegExp("}"),
  DECLARACION_VARIABLE: /var/,
  DECLARACION_INSCOPE: /let/,
  DECLARACION_CONSTANTE: /const/,
  STRING: /[a-zA-Z]*/,
  NUMERO: /[0-9]+/,
  ASIGNACION: /=/,
  NULL: /null/,
  PUNTO_Y_COMA: /;/,
  ESPACIO: /\s+/,
  COREO_ELECTRONICO: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,
  NUMERO_TELEFONICO: /\d{3}-\d{3}-\d{4}/,
  PARENTESIS_I: /\(/,
  PARENTESIS_D: /\)/,
  COMA: /,/,
  FUNCION: /function/,
  GUION_BAJO: /_/,
};

module.exports = tokens;
