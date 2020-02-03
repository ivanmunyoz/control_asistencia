
CREATE TABLE IF NOT EXISTS `asistencia` (
  `id_asistencia` int(11) NOT NULL AUTO_INCREMENT,
  `contador_faltas` int(11) NOT NULL,
  `contador_justificadas` int(11) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  PRIMARY KEY (`id_asistencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `calendario` (
  `id_calendario` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `hora_inicio_dia` time NOT NULL,
  `hora_fin_dia` time NOT NULL,
  PRIMARY KEY (`id_calendario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `ciclos` (
  `id_ciclo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_ciclo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=3 ;


INSERT INTO `ciclos` (`id_ciclo`, `nombre`, `descripcion`) VALUES
(1, 'DAM', 'Desarrollo de aplicaciones multiplataforma'),
(2, 'ASIX', 'Administracion de sistemas informaticos en red');


CREATE TABLE IF NOT EXISTS `clase` (
  `id_clase` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `curso` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_clase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `modulos` (
  `id_modulo` int(11) NOT NULL AUTO_INCREMENT,
  `id_ciclo` int(11) DEFAULT NULL,
  `nombre` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `horas_totales` int(11) NOT NULL,
  PRIMARY KEY (`id_modulo`),
  KEY `id_ciclo` (`id_ciclo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=3 ;


INSERT INTO `modulos` (`id_modulo`, `id_ciclo`, `nombre`, `descripcion`, `horas_totales`) VALUES
(1, 1, 'M01', 'Administracion de bases de datos', 88),
(2, 1, 'M02', 'Programacion orientada a objetos', 66);


CREATE TABLE IF NOT EXISTS `unidades_formativas` (
  `id_uf` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` int(11) NOT NULL,
  `descripcion` int(11) NOT NULL,
  `duracion` int(11) NOT NULL,
  PRIMARY KEY (`id_uf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `primer_apellido` int(20) NOT NULL,
  `segundo_apellido` int(20) NOT NULL,
  `dni` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `tipo` varchar(13) COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `contraseña` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;


ALTER TABLE `modulos`
  ADD CONSTRAINT `modulos_ibfk_1` FOREIGN KEY (`id_ciclo`) REFERENCES `ciclos` (`id_ciclo`);