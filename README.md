# FreeAnime.tv
Fast and free anime website for browsing online embedded content

### Design Rules
1. No backend. Being client-side allows use to have **zero** maintenance costs, which is important for the long-term survival of the project.
2. Free (as in freedom) and open-source. This is a project from the community, for the community, and all design decisions **must** respect that.

### Design Goals
1. Fast
2. Lightweight
3. Unintrusive
4. Feature Rich

### Architecture and Tech Stack
- Language: TypeScript
- Package Manager: npm
- Client Framework: SolidJS
- CSS Framework: Tailwind
- CI/CD: Github Actions
- CDN: Github Pages

### Other Tools and Technologies
- Wiki: Github Wiki
- Mockup Tool: Penpot
- Art: Krita, Inkscape (original assets are saved in the freeanime/art repo)

### Development
```
git clone https://github.com/freeanime/freeanime.tv.git
cd freeanime.tv
npm i # install dependencies
npm run dev # build and run locally
```
Recommended VSCode extensions:
- [code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

We use the Airbnb style guide. See their file naming convention [here](https://github.com/airbnb/javascript/tree/master/react#naming).

### API Parsing

Every page must be self-contained, meaning if you give that link to someone else, everything works as intended.

Prefered methods for piggybacking on APIs:

1. Use source's native JSON API
2. Use HTML parser on source' native HTML API
4. Use HTML parser on the source's entire page
3. Use source's JSON search API to find the title
5. Use HTML parser on the source's HTML search results to find the title

### Disclaimer
FreeAnime.tv does not store or serve any content from its servers. All contents are provided by non-affiliated third parties.
