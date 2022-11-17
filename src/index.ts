import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);
  console.log(new Date().toLocaleString());
  console.log(`pablito`);

});
