import { loadRemoteModule } from "@angular-architects/module-federation";

export const registry = {
    mfe: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://192.168.1.104:50010/remoteEntry.js',
            exposedModule: './Component',
        })
}