# GraphQL Rick and Morty Project

A comprehensive project demonstrating GraphQL queries and React application development using the Rick and Morty API.

## Project Overview

This project consists of multiple tasks that progressively build skills in GraphQL querying and React/Next.js development:

1. **GraphQL Query Fundamentals** - Learning to write basic GraphQL queries
2. **Character and Episode Queries** - Fetching specific data from the Rick and Morty API
3. **React Application Setup** - Creating a Next.js app with Apollo Client
4. **Full-Stack Integration** - Building a complete episode browser application

## Technologies Used

- **GraphQL** - Query language for APIs
- **Next.js** - React framework for web applications
- **TypeScript** - Type-safe JavaScript
- **Apollo Client** - GraphQL client for React
- **Tailwind CSS** - Utility-first CSS framework
- **Rick and Morty API** - GraphQL endpoint for show data

## Project Structure

```
├── alx-graphql-0x00/           # GraphQL query exercises
│   ├── character/              # Character query tasks
│   └── episode/                # Episode query tasks
├── alx-graphql-0x01/           # Basic React app setup
│   └── alx-rick-and-morty-app/
└── alx-graphql-0x02/           # Complete application
    └── alx-rick-and-morty-app/
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Basic knowledge of JavaScript/TypeScript
- Basic understanding of React concepts

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. For React applications (Tasks 3-4):
   ```bash
   cd alx-rick-and-morty-app
   npm install
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## Task Breakdown

### Task 0: Character Queries by ID
**Objective**: Learn to write GraphQL queries to fetch specific character data.

**Skills Learned**:
- GraphQL query syntax
- Using query arguments
- Selecting specific fields
- Working with the Rick and Morty API

**Deliverables**:
- GraphQL query files for characters 1-4
- Expected output JSON files
- Documentation explaining the queries

### Task 1: Character List Queries
**Objective**: Create paginated queries to fetch lists of characters.

**Skills Learned**:
- Pagination in GraphQL
- Working with query results arrays
- Handling multiple pages of data

**Deliverables**:
- GraphQL queries for pages 1-4
- Corresponding output files
- Understanding of pagination concepts

### Task 2: Episode Queries
**Objective**: Write queries to fetch episode information by ID.

**Skills Learned**:
- Different entity types in GraphQL
- Episode-specific fields
- Consistent query patterns

**Deliverables**:
- Episode query files
- JSON output examples
- Documentation for episode queries

### Task 3: React Application Setup
**Objective**: Set up a Next.js application with Apollo Client for GraphQL integration.

**Skills Learned**:
- Next.js project initialization
- Apollo Client configuration
- TypeScript setup
- Project structure organization

**Deliverables**:
- Configured Next.js application
- Apollo Client setup
- GraphQL query definitions
- App provider configuration

### Task 4: Complete Application
**Objective**: Build a full episode browser with GraphQL data fetching.

**Skills Learned**:
- React hooks (useState, useEffect, useQuery)
- Component composition
- TypeScript interfaces
- Responsive design with Tailwind CSS
- State management
- Error handling and loading states

**Deliverables**:
- Complete episode browser application
- Reusable React components
- TypeScript type definitions
- Responsive UI with pagination

## API Reference

### Rick and Morty GraphQL Endpoint
- **URL**: `https://rickandmortyapi.com/graphql`
- **Playground**: `https://rickandmortyapi.com/graphql` (for testing queries)

### Key Query Types

#### Character Queries
```graphql
# Single character
character(id: ID!): Character

# Multiple characters with pagination
characters(page: Int, filter: FilterCharacter): Characters
```

#### Episode Queries
```graphql
# Single episode
episode(id: ID!): Episode

# Multiple episodes with pagination
episodes(page: Int, filter: FilterEpisode): Episodes
```

## Development Guide

### Testing GraphQL Queries

1. Visit the GraphQL playground: `https://rickandmortyapi.com/graphql`
2. Copy your query into the left panel
3. Click the play button to execute
4. Verify the output matches expected results

### Running the React Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Code Style Guidelines

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error handling
- Write descriptive component and variable names
- Use Tailwind CSS for consistent styling

## Features Implemented

### GraphQL Integration
- ✅ Character queries by ID
- ✅ Paginated character lists
- ✅ Episode queries by ID
- ✅ Error handling for API calls
- ✅ Loading states

### React Application
- ✅ Next.js with TypeScript
- ✅ Apollo Client integration
- ✅ Responsive design
- ✅ Component-based architecture
- ✅ State management with hooks
- ✅ Pagination controls
- ✅ Episode card components
- ✅ Professional UI with Tailwind CSS

## Troubleshooting

### Common Issues

1. **GraphQL Syntax Errors**
   - Check bracket matching in queries
   - Verify field names are correct
   - Test queries in the GraphQL playground first

2. **React App Won't Start**
   - Ensure Node.js is installed (v14+)
   - Run `npm install` to install dependencies
   - Check for port conflicts (default: 3000)

3. **TypeScript Errors**
   - Verify interface definitions match data structure
   - Use optional chaining for nested objects
   - Check import paths are correct

4. **Apollo Client Issues**
   - Verify GraphQL endpoint URL is correct
   - Check network connectivity
   - Ensure ApolloProvider wraps the app

### Getting Help

- Check the browser console for error messages
- Use React Developer Tools for component debugging
- Test GraphQL queries independently in the playground
- Refer to official documentation for Apollo Client and Next.js

## Performance Considerations

- GraphQL queries only fetch required fields
- Apollo Client provides automatic caching
- React.memo used for component optimization
- Proper loading and error states implemented
- Responsive design for all device sizes

## Security Best Practices

- No sensitive data exposed in client-side code
- Environment variables used for configuration
- Input validation on all user interactions
- Safe handling of API responses

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes as part of the ALX curriculum.

## Acknowledgments

- Rick and Morty API team for providing the GraphQL endpoint
- Apollo GraphQL team for excellent tooling
- Next.js team for the React framework
- Tailwind CSS for the styling framework

## Next Steps

After completing this project, consider exploring:

- GraphQL mutations for data modification
- Real-time subscriptions
- Advanced Apollo Client features
- Server-side rendering optimization
- Progressive Web App features
- Testing with Jest and React Testing Library

---

**Happy coding!** 🚀