export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };
    getAllStarships = async () => {
        const starshipsArray = await this.getResource(`/starships/`);
        return starshipsArray.results.map((starship) => this._transformStarship(starship));
    }
    getStarship = async (id) => {
        const starship = this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }
    getAllFilms = async () => {
        const filmsArray = await this.getResource(`/films/`);
        return filmsArray.results;
    }
    getFilms = async (id) => {
        return this.getResource(`/films/${id}`);
    }
    getAllSpecies = async () => {
        const speciesArray = await this.getResource(`/species/`);
        return speciesArray.results;
    }
    getSpecie = async (id) => {
        return this.getResource(`/species/${id}`);
    }
    getAllVehicles = async () => {
        const vehiclesArray = await this.getResource(`/vehicles/`);
        return vehiclesArray.results;
    }
    getVehicle = async (id) => {
        return this.getResourse(`/vehicles/${id}`);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredit: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}
