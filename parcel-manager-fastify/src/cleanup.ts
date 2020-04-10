import del from 'del';

(async (): Promise<void> => {
  const deletedPaths = await del(['*-v8.log']);

  console.log('V8 logs cleaned:\n', deletedPaths.join('\n'));
})();
