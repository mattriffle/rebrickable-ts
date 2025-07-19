# rebrickable-ts

A comprehensive TypeScript client for the Rebrickable API v3, providing full type safety and complete API coverage.

## Installation

```bash
npm install rebrickable-ts
```

## Quick Start

```typescript
import { RebrickableAPI } from "rebrickable-ts";

const apiKey = "YOUR_API_KEY"; // Get your API key from https://rebrickable.com/api/
const api = new RebrickableAPI(apiKey);
```

## Examples

### Basic LEGO Data Queries

#### Get All Colors

```typescript
async function getColors() {
  try {
    const colors = await api.getColors();
    console.log(`Found ${colors.count} colors`);
    colors.results.forEach((color) => {
      console.log(`${color.name} (${color.rgb})`);
    });
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
}
```

#### Search for LEGO Sets

```typescript
async function searchSets() {
  try {
    // Search for Star Wars sets from 2020 or later
    const sets = await api.getSets({
      search: "Star Wars",
      min_year: 2020,
      ordering: "-year", // Sort by year descending
      page_size: 10,
    });

    console.log(`Found ${sets.count} Star Wars sets from 2020+`);
    sets.results.forEach((set) => {
      console.log(
        `${set.set_num}: ${set.name} (${set.year}) - ${set.num_parts} parts`
      );
    });
  } catch (error) {
    console.error("Error searching sets:", error);
  }
}
```

#### Get Specific Set Details

```typescript
async function getSetDetails() {
  try {
    const set = await api.getSet("75192-1"); // Millennium Falcon UCS
    console.log(`Set: ${set.name}`);
    console.log(`Year: ${set.year}`);
    console.log(`Parts: ${set.num_parts}`);
    console.log(`Theme ID: ${set.theme_id}`);

    // Get the parts in this set
    const parts = await api.getSetParts("75192-1", { page_size: 20 });
    console.log(`\nFirst 20 parts in ${set.name}:`);
    parts.results.forEach((part) => {
      console.log(`- ${part.part.name} (${part.color.name}) x${part.quantity}`);
    });
  } catch (error) {
    console.error("Error fetching set details:", error);
  }
}
```

#### Find Parts by Category

```typescript
async function findBricks() {
  try {
    // Get all part categories first
    const categories = await api.getPartCategories();
    const brickCategory = categories.results.find((cat) =>
      cat.name.toLowerCase().includes("brick")
    );

    if (brickCategory) {
      // Find parts in the brick category
      const parts = await api.getParts({
        part_cat_id: brickCategory.id.toString(),
        page_size: 10,
      });

      console.log(
        `Found ${parts.count} parts in category: ${brickCategory.name}`
      );
      parts.results.forEach((part) => {
        console.log(`${part.part_num}: ${part.name}`);
      });
    }
  } catch (error) {
    console.error("Error finding bricks:", error);
  }
}
```

### User Account Management

#### Authenticate and Get Profile

```typescript
async function authenticateUser() {
  try {
    // Generate user token (requires username/password)
    const tokenResponse = await api.createUserToken("username", "password");
    const userToken = tokenResponse.user_token;

    // Get user profile
    const profile = await api.getUserProfile(userToken);
    console.log(`Welcome, ${profile.username}!`);
    console.log(
      `You own ${profile.num_owned_sets} sets and ${profile.num_owned_parts} parts`
    );
  } catch (error) {
    console.error("Authentication error:", error);
  }
}
```

#### Manage User's LEGO Collection

```typescript
async function manageCollection(userToken: string) {
  try {
    // Get user's sets
    const userSets = await api.getUserSets(userToken, { page_size: 10 });
    console.log(`You own ${userSets.count} sets:`);
    userSets.results.forEach((userSet) => {
      console.log(`- ${userSet.set.name} x${userSet.quantity}`);
    });

    // Add a new set to collection
    await api.addUserSet(userToken, {
      set_num: "10696-1", // Creative Building Box
      quantity: 1,
      include_spares: true,
    });
    console.log("Added Creative Building Box to your collection!");

    // Create a custom part list
    const partList = await api.createUserPartList(userToken, {
      name: "My Custom MOC Parts",
      is_buildable: true,
    });

    // Add parts to the list
    await api.addUserPartListPart(userToken, partList.id.toString(), {
      part_num: "3001", // 2x4 Brick
      color_id: 4, // Red
      quantity: 10,
    });

    console.log(`Created part list: ${partList.name}`);
  } catch (error) {
    console.error("Collection management error:", error);
  }
}
```

#### Check Build Compatibility

```typescript
async function checkBuildability(userToken: string) {
  try {
    const buildInfo = await api.getUserBuild(userToken, "10696-1");

    console.log(`Set: ${buildInfo.set.name}`);
    console.log(`Can build: ${buildInfo.can_build ? "Yes" : "No"}`);
    console.log(`Build match: ${buildInfo.build_match}%`);
    console.log(
      `Missing parts: ${buildInfo.missing_parts}/${buildInfo.total_parts}`
    );
  } catch (error) {
    console.error("Build check error:", error);
  }
}
```

### Advanced Queries

#### Find Alternative Builds (MOCs)

```typescript
async function findAlternativeBuilds() {
  try {
    const alternates = await api.getSetAlternates("10696-1", { page_size: 5 });
    console.log(
      `Found ${alternates.count} alternative builds for Creative Building Box:`
    );

    alternates.results.forEach((moc) => {
      console.log(
        `- ${moc.name} by ${moc.designer_name} (${moc.num_parts} parts)`
      );
    });
  } catch (error) {
    console.error("Error finding alternates:", error);
  }
}
```

#### Explore Themes and Subthemes

```typescript
async function exploreThemes() {
  try {
    const themes = await api.getThemes({ ordering: "name" });

    // Find Star Wars theme
    const starWarsTheme = themes.results.find((theme) =>
      theme.name.includes("Star Wars")
    );

    if (starWarsTheme) {
      console.log(`Theme: ${starWarsTheme.name} (ID: ${starWarsTheme.id})`);

      // Get sets in this theme
      const themeSets = await api.getSets({
        theme_id: starWarsTheme.id.toString(),
        min_year: 2020,
        page_size: 5,
      });

      console.log(`Recent sets in ${starWarsTheme.name}:`);
      themeSets.results.forEach((set) => {
        console.log(`- ${set.name} (${set.year})`);
      });
    }
  } catch (error) {
    console.error("Theme exploration error:", error);
  }
}
```

## API Reference

### LEGO Data Methods

- **Colors**: `getColors()`, `getColor(id)`
- **Elements**: `getElement(elementId)`
- **Minifigs**: `getMinifigs()`, `getMinifig(setNum)`, `getMinifigParts()`, `getMinifigSets()`
- **Part Categories**: `getPartCategories()`, `getPartCategory(id)`
- **Parts**: `getParts()`, `getPart(partNum)`, `getPartColors()`, `getPartColor()`, `getPartColorSets()`
- **Sets**: `getSets()`, `getSet(setNum)`, `getSetAlternates()`, `getSetMinifigs()`, `getSetParts()`, `getSetSets()`
- **Themes**: `getThemes()`, `getTheme(id)`

### User Account Methods

- **Authentication**: `createUserToken(username, password)`
- **Profile**: `getUserProfile(userToken)`
- **Badges**: `getBadges()`, `getBadge(id)`
- **Collections**: `getUserSets()`, `getUserParts()`, `getUserMinifigs()`, `getUserAllParts()`
- **Part Lists**: `getUserPartLists()`, `createUserPartList()`, `getUserPartList()`, etc.
- **Set Lists**: `getUserSetLists()`, `createUserSetList()`, `getUserSetList()`, etc.
- **Build Analysis**: `getUserBuild(userToken, setNum)`
- **Lost Parts**: `getUserLostParts()`, `addUserLostPart()`, `deleteUserLostPart()`

## Type Safety

All methods return fully typed responses based on the official Rebrickable API specification:

```typescript
import { PaginatedResponse, Set, Color } from "rebrickable-ts";

const sets: PaginatedResponse<Set> = await api.getSets();
const colors: PaginatedResponse<Color> = await api.getColors();
```

## Error Handling

The client throws standard HTTP errors. Always wrap API calls in try-catch blocks:

```typescript
try {
  const set = await api.getSet("invalid-set-num");
} catch (error) {
  if (error.response?.status === 404) {
    console.log("Set not found");
  } else {
    console.error("API error:", error.message);
  }
}
```

## Getting Your API Key

1. Visit [https://rebrickable.com/api/](https://rebrickable.com/api/)
2. Sign up for a free account
3. Generate your API key in the account settings
4. Use the key to initialize the client

## Credits

Generated with the help of Kilo Code and Claude Sonnet v3.7 and 4

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

Copyright (c) 2025 Matt Riffle
