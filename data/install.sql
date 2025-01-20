CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    uuid VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at timestamptz,
    nickname VARCHAR(255),
    avatar_url VARCHAR(255),
    locale VARCHAR(50),
    signin_type VARCHAR(50),
    signin_ip VARCHAR(255),
    signin_provider VARCHAR(50),
    signin_openid VARCHAR(255),
    UNIQUE (email, signin_provider)
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    uuid VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    avatar_url VARCHAR(255),
    created_at timestamptz,
    updated_at timestamptz,
    status VARCHAR(50),
    author_name VARCHAR(255),
    author_avatar_url VARCHAR(255),
    tags TEXT,
    category VARCHAR(50),
    is_featured BOOLEAN DEFAULT FALSE,
    sort INTEGER DEFAULT 0,
    url VARCHAR(255),
    target VARCHAR(50),
    content TEXT,
    summary TEXT,
    img_url TEXT
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50),
    created_at timestamptz
);

CREATE INDEX idx_projects_category_query ON projects(category, status, sort DESC, created_at DESC);

CREATE INDEX idx_projects_featured_query ON projects(is_featured, status, sort DESC, created_at DESC);