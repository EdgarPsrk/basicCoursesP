const button = document.getElementById('btn');
button.addEventListener('click', async function(){
    const module=await import('./dynamicModules.js');
    console.log(module);
    module.hello();
});