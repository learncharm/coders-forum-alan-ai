// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});
intent('e beta! admin panel kholo zara', (p) => {
    p.play('Admin Panel Opeaning, Thanks for using Learncharm');
    p.play({command:'adminPanel'});
   
});
intent('Open Home Page', (p) => {
    p.play({command:'homePage'});
});