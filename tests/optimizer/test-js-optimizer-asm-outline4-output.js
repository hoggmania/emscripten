function ___stdout_write($f, $buf, $len) {
 $f = $f | 0;
 $buf = $buf | 0;
 $len = $len | 0;
 var $10 = 0, sp = 0, sp_a = 0;
 sp = STACKTOP;
 sp_a = STACKTOP = STACKTOP + 31 & -32;
 STACKTOP = STACKTOP + 272 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abort();
 SAFE_HEAP_STORE($f + 36 | 0, 3 | 0, 4, 0);
 if (((SAFE_HEAP_LOAD($f | 0, 4, 0, 0) | 0) & 64 | 0) == 0) {
  SAFE_HEAP_STORE(sp_a | 0, SAFE_HEAP_LOAD($f + 60 | 0, 4, 0, 0) | 0 | 0, 4, 0);
  HEAP32[sp + 96 >> 2] = $f;
  HEAP32[sp + 136 >> 2] = sp_a;
  HEAP32[sp + 144 >> 2] = 0;
  HEAP32[sp + 148 >> 2] = 0;
  ___stdout_write$0(sp);
 }
 $10 = ___stdio_write($f, $buf, $len) | 0;
 STACKTOP = sp;
 return $10 | 0;
}
function ___stdout_write$0(sp) {
 sp = sp | 0;
 var sp_a = 0, $f = 0;
 $f = HEAP32[sp + 96 >> 2] | 0;
 sp_a = HEAP32[sp + 136 >> 2] | 0;
 SAFE_HEAP_STORE(sp_a + 4 | 0, 21505 | 0, 4, 0);
 SAFE_HEAP_STORE(sp_a + 8 | 0, sp_a + 12 | 0, 4, 0);
 if ((___syscall(54, sp_a | 0) | 0) != 0) {
  SAFE_HEAP_STORE($f + 75 >> 0 | 0, -1 | 0, 1, 0);
 }
}

