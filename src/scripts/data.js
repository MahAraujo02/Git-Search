export async function requisitionApi() {
    try {
        const userName = localStorage.getItem('userName');
        const response = await fetch(`https://api.github.com/users/${userName}/repos`);

        if (!response.ok) {
        
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const repos = await response.json();
        localStorage.setItem('repos', JSON.stringify(repos));
        window.location.href = './src/pages/profile.html';
        
    } catch (error) {
        console.error(error);
        window.location.href = './src/pages/erro.html';
    }
}

