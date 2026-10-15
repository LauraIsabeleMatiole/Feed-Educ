# Compila o backend com Maven e Java 17
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -q dependency:go-offline
COPY src ./src
RUN mvn -q -DskipTests package

# Imagem final só com o Java e o .jar
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
# O Render informa a porta pela variável PORT (lida no application.properties)
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
