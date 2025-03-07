export const POSTGRES_ERRORS = {
  23505: 'Unique violation',
  23503: 'Foreign key violation',
  23514: 'Check constraint violation',
  '08003': 'Connection does not exist',
  '08006': 'Connection failure',
  '08001': 'SQL client unable to establish connection',
  '08004': 'SQL server rejected establishment of connection',
  '08007': 'Transaction resolution unknown',
  '42P01': 'Undefined table',
  42601: 'Syntax error',
  42703: 'Undefined column',
  '42P02': 'Undefined parameter',
  42804: 'Datatype mismatch',
  22001: 'String data right truncation',
  22003: 'Numeric value out of range',
  22012: 'Division by zero',
  22008: 'Datetime field overflow',
  '2200G': 'Most specific type mismatch',
  22018: 'Invalid character value for cast',
  22007: 'Invalid datetime format',
  '22P02': 'Invalid text representation',
  40001: 'Serialization failure',
  '40P01': 'Deadlock detected',
  '25P02': 'In failed SQL transaction',
  55006: 'Object in use',
  57014: 'Query canceled',
  XX000: 'Internal error',
  XX001: 'Data corrupted',
  XX002: 'Index corrupted'
}
