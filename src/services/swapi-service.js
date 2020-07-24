export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const peopleArray = await this.getResourse(`/people/`);
        return peopleArray.results;
    }
    async getPerson(id) {
        return this.getResourse(`/people/${id}`);
    }
    async getAllPlanets() {
        const planetArray = await this.getResourse(`/planets/`);
        return planetArray.results;
    }
    async getPlanet(id) {
        return this.getResourse(`/planets/${id}`);
    }
    async getAllStarships() {
        const starshipsArray = await this.getResourse(`/starships/`);
        return starshipsArray.results;
    }
    async getStarship(id) {
        return this.getResourse(`/starships/${id}`);
    }
    async getAllFilms() {
        const filmsArray = await this.getResourse(`/films/`);
        return filmsArray.results;
    }
    async getFilms(id) {
        return this.getResourse(`/films/${id}`);
    }
    async getAllSpecies() {
        const speciesArray = await this.getResourse(`/species/`);
        return speciesArray.results;
    }
    async getSpecie(id) {
        return this.getResourse(`/species/${id}`);
    }
    async getAllVehicles() {
        const vehiclesArray = await this.getResourse(`/vehicles/`);
        return vehiclesArray.results;
    }
    async getVehicle(id) {
        return this.getResourse(`/vehicles/${id}`);
    }
}
