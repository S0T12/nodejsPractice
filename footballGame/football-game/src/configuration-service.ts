import fs from 'fs';

export class ConfigurationService {
    private readonly configPath: string;

    constructor(configPath: string) {
        this.configPath = configPath;
    }

    async getGameDuration(): Promise<number> {
        const data = await this.getConfig();
        return data.getGameDuration;
    }

    async getTeamSize(): Promise<number> {
        const data = await this.getConfig();
        return data.teamSize;
    }

    async getMaxSubstitutions(): Promise<number> {
        const data = await this.getConfig();
        return data.timeouts.break;
    }

    async getHalfTimeBreakTime(): Promise<number> {
        const data = await this.getConfig();
        return data.timeouts.halfTime;
    }

    private async getConfig(): Promise<any> {
        const data = await fs.promises.readFile(this.configPath, 'utf-8');
        return JSON.parse(data);
    }
}