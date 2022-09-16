// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});
// admin side
intent('go to admin panel', (p) => {
    p.play('Admin Panel Opeaning, Thanks for using Learncharm');
    p.play({command:'adminPanel'});
   
});
intent('Go to Admin Threads', (p) => {
    p.play('Going to Admin Threads');
    p.play({command:'adminThreads'});
});
intent('Go to Admin Category', (p) => {
    p.play('Going to Admin Category');
    p.play({command:'adminCategory'});
});
intent('Go to Admin Answers', (p) => {
    p.play('Going to Admin Comments');
    p.play({command:'adminComments'});
});
intent('Go to Admin Users', (p) => {
    p.play('Going to Admin Users');
    p.play({command:'adminUsers'});
});

intent('Go to Home Page', (p) => {
    p.play('Going to Home Page');
    p.play({command:'homePage'});
});
