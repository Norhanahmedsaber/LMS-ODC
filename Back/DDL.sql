CREATE TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(255), password VARCHAR(255), role VARCHAR(50), job VARCHAR(255), bio VARCHAR(255));

CREATE TABLE categories (id SERIAL PRIMARY KEY, name VARCHAR(255));

CREATE TABLE courses (id SERIAL PRIMARY KEY, name VARCHAR(255), description VARCHAR(255), category_id int, FOREIGN KEY(category_id) REFERENCES categories(id));

CREATE TABLE sections (id SERIAL PRIMARY KEY, name VARCHAR(50), section_order int, course_id int, FOREIGN KEY(course_id) REFERENCES courses(id));

CREATE TABLE contents (id SERIAL PRIMARY KEY, name VARCHAR(50), content_order int, section_id int, FOREIGN KEY(section_id) REFERENCES sections(id));

CREATE TABLE instructor_course (instructor_id int, course_id int, FOREIGN KEY(instructor_id) REFERENCES users(id), FOREIGN KEY(course_id) REFERENCES courses(id));

CREATE TABLE student_course (student_id int, course_id int, progress float, rate float, FOREIGN KEY(student_id) REFERENCES users(id), FOREIGN KEY(course_id) REFERENCES courses(id));

CREATE TABLE student_content (student_id int, content_id int, state int, FOREIGN KEY(student_id) REFERENCES users(id), FOREIGN KEY(content_id) REFERENCES contents(id));



